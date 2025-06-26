import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventService {
  constructor(private prismaService: PrismaService) {}

  create(userId: string, createEventDto: CreateEventDto) {
    return this.prismaService.event.create({
      data: { ...createEventDto, creator_id: userId },
    });
  }

  findAll() {
    return this.prismaService.event.findMany();
  }

  findOne(id: string) {
    return this.prismaService.event.findUnique({
      where: { id },
    });
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
}
