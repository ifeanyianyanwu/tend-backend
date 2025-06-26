import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDate()
  @IsNotEmpty()
  start_time: Date;

  @IsDate()
  @IsNotEmpty()
  end_time: Date;

  @IsString()
  @IsOptional()
  location?: string;
}
