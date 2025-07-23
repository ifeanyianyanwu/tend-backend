import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './dto/user-entity.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserRole } from 'src/common/enums/user-role.enum.js';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (user) {
      return new UserEntity(user);
    } else return null;
  }

  async update(userId: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: updateUserDto,
    });
    return new UserEntity(user);
  }

  findUserEvents(userId: string, role: UserRole) {
    if (role === UserRole.Creator) {
      return this.prisma.event.findMany({
        where: { creator_id: userId },
      });
    } else if (role === UserRole.Attendee) {
      return this.prisma.eventAttendee
        .findMany({
          where: { user_id: userId },
          include: { event: true },
        })
        .then((attendes) => attendes.map((attende) => attende.event));
    } else if (role === UserRole.Scanner) {
      return this.prisma.eventScanner
        .findMany({
          where: { user_id: userId },
          include: { event: true },
        })
        .then((scanners) => scanners.map((scanner) => scanner.event));
    }
  }
}
