import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class UserReturnDto {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  first_name: string;

  @Expose()
  @IsString()
  last_name: string;

  @Expose()
  @IsString()
  email: string;
}
