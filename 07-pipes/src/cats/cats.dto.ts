import { IsString, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class FindCatsDto {
  @IsPositive()
  limit: number;
}

export class UpdateCatDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
