import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { FilterDto } from 'src/event/dto/filter-event.dto';

@Injectable()
export class EventFilterBuilderService {
  buildWhereClause(filters: FilterDto) {
    const where: Prisma.EventWhereInput = {};

    if (filters.location) {
      where.location = filters.location;
    }

    if (filters.search) {
      where.name = { contains: filters.search, mode: 'insensitive' };
    }

    if (filters.startDate || filters.endDate) {
      where.AND = [];

      if (filters.startDate) {
        where.AND.push({
          start_time: {
            gte: new Date(filters.startDate),
          },
        });
      }

      if (filters.endDate) {
        where.AND.push({
          end_time: {
            lte: new Date(filters.endDate),
          },
        });
      }
    }

    return where;
  }

  buildPagination(filters: FilterDto) {
    const page = filters.page || 1;
    const limit = filters.limit || 10;
    const skip = (page - 1) * limit;

    return {
      skip,
      take: limit,
      page,
      limit,
    };
  }
}
