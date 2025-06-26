import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { RequestWithUser } from 'src/interfaces';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('details')
  getUserDetails(@Request() req: RequestWithUser) {
    return this.userService.findById(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUserDetailsById(@Param('id') id: string) {
    return this.userService.findById(id);
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
