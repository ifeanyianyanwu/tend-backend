import {
  Body,
  Controller,
  Get,
  Patch,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

export interface RequestWithUser extends Request {
  user: { userId: string; email: string };
}

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('details')
  getUserDetails(@Request() req: RequestWithUser) {
    return this.userService.findById(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('details')
  updateUserDetails(
    @Request() req: RequestWithUser,
    @Body() body: UpdateUserDto,
  ) {
    return this.userService.update(req.user.userId, body);
  }
}
