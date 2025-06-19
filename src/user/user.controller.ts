import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

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
}
