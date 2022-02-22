import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats() {
    throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);

    return 'getCats';
  }

  @Get(':id')
  getCat(@Param('id') id: string) {
    console.log(id);

    return 'getCat';
  }

  @Post()
  createCat() {
    return 'createCat';
  }

  @Put(':id')
  updateCat(@Param('id') id: string) {
    console.log(id);

    return 'updateCat';
  }

  @Delete(':id')
  deleteCat(@Param('id') id: string) {
    console.log(id);

    return 'deleteCat';
  }
}
