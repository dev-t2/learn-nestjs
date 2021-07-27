import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  createCat(): string {
    return 'Create Cat';
  }

  @Get()
  getAllCat(): string {
    return 'Get All Cat';
  }

  @Get(':id')
  getCat(): string {
    return 'Get Cat';
  }

  @Put(':id')
  updateCat(): string {
    return 'Update Cat';
  }

  @Delete(':id')
  deleteCat(): string {
    return 'Delete Cat';
  }
}
