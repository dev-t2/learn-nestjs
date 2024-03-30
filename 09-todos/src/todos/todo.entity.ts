import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsPositive, IsString } from 'class-validator';

export class Todo {
  @ApiProperty({ required: true, minimum: 1, example: 1, description: 'ID' })
  @IsPositive()
  id: number;

  @ApiProperty({ default: '', example: 'Learn NestJS', description: 'Content' })
  @IsString()
  content: string;

  @ApiProperty({ default: false, example: false, description: 'Complete' })
  @IsBoolean()
  isComplete: boolean;
}
