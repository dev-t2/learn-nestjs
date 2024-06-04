import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { ParsePositiveIntPipe } from 'src/common/pipes';
import { CatsService } from './cats.service';
import { CreateCatDto, FindCatsDto, UpdateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCat(createCatDto);
  }

  @Get()
  findCats(@Query() findCatsDto: FindCatsDto) {
    return this.catsService.findCats(findCatsDto);
  }

  @Get(':id')
  findCat(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.catsService.findCat(id);
  }

  @Put(':id')
  updateCat(@Param('id', ParsePositiveIntPipe) id: number, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.updateCat(id, updateCatDto);
  }

  @Delete(':id')
  deleteCat(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.catsService.deleteCat(id);
  }
}
