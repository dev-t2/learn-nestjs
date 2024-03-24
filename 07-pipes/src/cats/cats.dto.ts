import { IsString, IsPositive } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
}

export class FindCatsDto {
  @IsPositive()
  limit: number;
}

export class UpdateCatDto {
  @IsString()
  name: string;
}
