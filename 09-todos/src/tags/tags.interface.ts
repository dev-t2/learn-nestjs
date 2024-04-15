import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class ITag {
  @ApiProperty({ required: true, minimum: 1, example: 1, description: 'Tag ID' })
  @IsNotEmpty()
  @IsPositive()
  id: number;

  @ApiProperty({ required: true, example: 'Tag Name', description: 'Tag Name' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
