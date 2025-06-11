import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Prisma } from 'generated/prisma';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginDto) {
    const existingUser = await this.userService.findByEmail(email);

    if (existingUser && bcrypt.compareSync(password, existingUser.password)) {
      // eslint-disable-next-line
      const { password, ...rest } = existingUser;
      return rest;
    }
    return null;
  }

  async register({ email, password, ...rest }: RegisterDto) {
    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await this.userService.create({
      first_name: rest.first_name,
      last_name: rest.last_name,
      password: hashedPassword,
      email: email,
    });

    return {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
    };
  }

  login(user: Prisma.UserCreateInput) {
    const payload = { sub: user.id, email: user.email };

    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }

  async resetPassword() {}
  async verifyEmail() {}
}
