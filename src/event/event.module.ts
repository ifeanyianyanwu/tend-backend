import { Module } from '@nestjs/common';
import { EventService } from './services/event.service';
import { EventController } from './event.controller';
import { PrismaService } from 'src/common/prisma.service';
import { EventFilterBuilderService } from 'src/event/services/event-filter-builder.service';

@Module({
  controllers: [EventController],
  providers: [EventService, PrismaService, EventFilterBuilderService],
})
export class EventModule {}
