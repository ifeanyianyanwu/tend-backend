import { Exclude } from 'class-transformer';

export class UserEntity {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
