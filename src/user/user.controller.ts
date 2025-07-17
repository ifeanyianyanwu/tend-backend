import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { RequestWithUser } from 'src/common/interfaces';
import { FindUserEventsDto } from './dto/find-user-events.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('current')
  getUserDetails(@Request() req: RequestWithUser) {
    return this.userService.findById(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUserDetailsById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('current')
  updateUserDetails(
    @Request() req: RequestWithUser,
    @Body() body: UpdateUserDto,
  ) {
    return this.userService.update(req.user.userId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('current/events')
  getUserEvents(
    @Request() req: RequestWithUser,
    @Query() query: FindUserEventsDto,
  ) {
    return this.userService.findUserEvents(req.user.userId, query.role);
  }
}
