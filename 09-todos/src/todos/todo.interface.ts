import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class ITodo {
  @ApiProperty({ required: true, minimum: 1, example: 1, description: 'ID' })
  @IsNotEmpty()
  @IsPositive()
  id: number;

  @ApiProperty({ default: '', example: 'Content', description: 'Content' })
  @IsString()
  content: string;

  @ApiProperty({ default: false, example: false, description: 'Complete' })
  @IsBoolean()
  isComplete: boolean;
}
