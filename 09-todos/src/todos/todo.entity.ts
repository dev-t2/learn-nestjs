import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsPositive, IsString } from 'class-validator';

export class Todo {
  @ApiProperty({ required: true, description: 'ID' })
  @IsPositive()
  id: number;

  @ApiProperty({ default: '', description: 'Content' })
  @IsString()
  content: string;

  @ApiProperty({ default: false, description: 'Complete' })
  @IsBoolean()
  isComplete: boolean;
}
