import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { CreateCatDto, FindCatsDto, UpdateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return `Create Cat - Name: ${createCatDto.name}`;
  }

  @Get()
  findCats(@Query() findCatsDto: FindCatsDto) {
    return `Find Cats - Limit: ${findCatsDto.limit}`;
  }

  @Get(':id')
  findCat(@Param('id') id: number) {
    return `Find Cat ${id}`;
  }

  @Put(':id')
  updateCat(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto) {
    return `Update Cat ${id} - Name: ${updateCatDto.name}`;
  }

  @Delete(':id')
  deleteCat(@Param('id') id: number) {
    return `Delete Cat ${id}`;
  }
}
