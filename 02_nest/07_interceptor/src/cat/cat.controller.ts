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

import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { PositiveIntPipe } from 'src/common/pipe/positive-int.pipe';
import { CatService } from './cat.service';

@Controller('cat')
@UseInterceptors(SuccessInterceptor)
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
  getCat(@Param('id', ParseIntPipe, PositiveIntPipe) id: number): string {
    console.log(id);

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
