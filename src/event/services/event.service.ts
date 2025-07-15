import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { PrismaService } from 'src/prisma.service';
import { FilterDto } from '../dto/filter-event.dto';
import { EventFilterBuilderService } from './event-filter-builder.service';

@Injectable()
export class EventService {
  constructor(
    private prismaService: PrismaService,
    private filterBuilder: EventFilterBuilderService,
  ) {}

  create(userId: string, createEventDto: CreateEventDto) {
    return this.prismaService.event.create({
      data: { ...createEventDto, creator_id: userId },
    });
  }

  async findAll(filters: FilterDto) {
    const where = this.filterBuilder.buildWhereClause(filters);
    const { skip, take, page, limit } =
      this.filterBuilder.buildPagination(filters);

    const model = this.prismaService.event;
    const [data, total] = await Promise.all([
      this.prismaService.event.findMany({ where, skip, take }),
      model.count({ where }),
    ]);

    const eventsWithStatus = data.map((event) => ({
      ...event,
      status: this.getEventStatus(
        event.start_time,
        event.end_time,
        event.status,
      ),
    }));

    return {
      data: eventsWithStatus,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: string) {
    const event = await this.prismaService.event.findUnique({
      where: { id },
    });

    if (!event) {
      throw new HttpException('Event Not Found', HttpStatus.BAD_REQUEST);
    }
    return {
      ...event,
      status: this.getEventStatus(
        event.start_time,
        event.end_time,
        event.status,
      ),
    };
  }

  async update(userId: string, id: string, updateEventDto: UpdateEventDto) {
    const event = await this.prismaService.event.findUnique({ where: { id } });

    if (!event) {
      throw new HttpException('Event Not Found', HttpStatus.BAD_REQUEST);
    }

    if (event.creator_id === userId) {
      return this.prismaService.event.update({
        where: { id },
        data: updateEventDto,
      });
    }

    throw new HttpException('Unauthorized Action', HttpStatus.UNAUTHORIZED);
  }

  async remove(userId: string, id: string) {
    const event = await this.prismaService.event.findUnique({ where: { id } });

    if (!event) {
      throw new HttpException('Event Not Found', HttpStatus.BAD_REQUEST);
    }

    if (event.creator_id === userId) {
      return this.prismaService.event.delete({ where: { id } });
    }

    throw new HttpException('Unauthorized Action', HttpStatus.UNAUTHORIZED);
  }

  getEventStatus(
    start: Date,
    end: Date,
    status?: string,
  ): 'upcoming' | 'ongoing' | 'completed' | 'canceled' {
    if (status === 'canceled') return status;
    const now = new Date();
    if (now < start) return 'upcoming';
    if (now >= start && now <= end) return 'ongoing';
    return 'completed';
  }
}
