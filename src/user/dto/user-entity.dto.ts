import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserEntity {
  @Expose()
  id: string;
  @Expose()
  first_name: string;
  @Expose()
  last_name: string;
  @Expose()
  email: string;
  @Expose()
  created_at: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
