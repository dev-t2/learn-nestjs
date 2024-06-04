import { IsString, IsPositive, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class FindCatsDto {
  @IsOptional()
  @IsPositive()
  limit?: number;
}

export class UpdateCatDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
