import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { Prisma } from 'generated/prisma';

interface RequestWithUser extends Request {
  user: Prisma.UserCreateInput;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  signIn(@Request() req: RequestWithUser) {
    return this.authService.login(req.user);
  }
}
