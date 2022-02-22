import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { PositiveIntPipe } from 'src/common/pipes/positive-int.pipe';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats() {
    return { cats: [] };
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
