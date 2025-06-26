import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';
import JwtPayload from './interfaces/jwt-payload';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from 'src/user/dto/user-entity.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
    private configService: ConfigService,
  ) {}

  async validateUser({ email, password }: LoginDto) {
    const existingUser = await this.userService.findByEmail(email);

    if (existingUser && bcrypt.compareSync(password, existingUser.password)) {
      return new UserEntity(existingUser);
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

    return new UserEntity(newUser);
  }

  async login(user: Prisma.UserCreateInput) {
    const tokens = await this.generateTokens(user.id as string, user.email);
    await this.updateRefreshToken(tokens.refresh_token);
    return tokens;
  }

  async refreshTokens(refresh_token: string) {
    try {
      const validatedToken: JwtPayload = this.jwtService.verify(refresh_token, {
        secret: this.configService.get('jwt.refresh_secret'),
      });

      const token = await this.findRefreshToken(refresh_token);

      if (token) {
        await bcrypt.compare(refresh_token, token.refresh_token);

        const newTokens = await this.generateTokens(
          validatedToken.sub,
          validatedToken.email,
        );
        return { access_token: newTokens.access_token };
      } else {
        throw new Error('Invalid refresh token');
      }
    } catch (error) {
      const token = await this.findRefreshToken(refresh_token);
      if (token) {
        await this.deleteRefreshToken(refresh_token);
      }
      console.log(error);
      throw new HttpException('Invalid refresh token', HttpStatus.UNAUTHORIZED);
    }
  }

  async logout(refresh_token: string) {
    const token = await this.findRefreshToken(refresh_token);
    if (token) {
      await this.deleteRefreshToken(refresh_token);
    }
    return;
  }

  // needs email service implementation
  async resetPassword() {}
  async verifyEmail() {}

  async findRefreshToken(refresh_token: string) {
    return await this.prismaService.refreshToken.findUnique({
      where: { lookup_prefix: this.splitStringInHalf(refresh_token)[1] },
    });
  }

  async updateRefreshToken(refresh_token: string) {
    const rtHash = await this.hashData(refresh_token);
    const [, lookup_prefix] = this.splitStringInHalf(refresh_token);

    const data = { refresh_token: rtHash, lookup_prefix };
    return await this.prismaService.refreshToken.create({
      data,
    });
  }

  async deleteRefreshToken(refresh_token: string) {
    await this.prismaService.refreshToken.delete({
      where: { lookup_prefix: this.splitStringInHalf(refresh_token)[1] },
    });
  }

  hashData(data: string) {
    return bcrypt.hash(data, 12);
  }

  async generateTokens(user_id: string, email: string) {
    const payload = { sub: user_id, email: email };
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get('jwt.access_secret'),
        expiresIn: this.configService.get('jwt.access_secret_expires_in'),
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get('jwt.refresh_secret'),
        expiresIn: this.configService.get('jwt.access_secret_expires_in'),
      }),
    ]);
    return { access_token, refresh_token };
  }

  splitStringInHalf(str: string): [string, string] {
    if (!str) return ['', ''];

    const middle = Math.floor(str.length / 2);
    const firstHalf = str.slice(0, middle);
    const secondHalf = str.slice(middle);

    return [firstHalf, secondHalf];
  }
}
