import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { RequestWithUser } from 'src/interfaces';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createEventDto: CreateEventDto,
    @Request() req: RequestWithUser,
  ) {
    return this.eventService.create(req.user.userId, createEventDto);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
    @Request() req: RequestWithUser,
  ) {
    return this.eventService.update(req.user.userId, id, updateEventDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.eventService.remove(req.user.userId, id);
  }
}
