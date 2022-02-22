import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { PositiveIntPipe } from 'src/common/pipes/positive-int.pipe';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats() {
    return 'getCats';
  }

  @Get(':id')
  getCat(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
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
