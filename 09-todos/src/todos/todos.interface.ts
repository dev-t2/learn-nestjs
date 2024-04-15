import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class ITodo {
  @ApiProperty({ required: true, minimum: 1, example: 1, description: 'Todo ID' })
  @IsNotEmpty()
  @IsPositive()
  id: number;

  @ApiProperty({ default: '', example: 'Todo Content', description: 'Todo Content' })
  @IsString()
  content: string;

  @ApiProperty({ default: false, example: false, description: 'isComplete Todo' })
  @IsBoolean()
  isComplete: boolean;

  @ApiProperty({ minimum: 1, example: 1, nullable: true, description: 'Tag ID' })
  @IsPositive()
  tagId: number | null;
}
