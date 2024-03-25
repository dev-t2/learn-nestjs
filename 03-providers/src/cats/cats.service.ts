import { Injectable } from '@nestjs/common';

import { CreateCatDto, FindCatsDto, UpdateCatDto } from './cats.dto';

@Injectable()
export class CatsService {
  createCat(createCatDto: CreateCatDto) {
    return `Create Cat - Name: ${createCatDto.name}`;
  }

  findCats(findCatsDto: FindCatsDto) {
    return `Find Cats - Limit: ${findCatsDto.limit ?? ''}`;
  }

  findCat(id: number) {
    return `Find Cat ${id}`;
  }

  updateCat(id: number, updateCatDto: UpdateCatDto) {
    return `Update Cat ${id} - Name: ${updateCatDto.name}`;
  }

  deleteCat(id: number) {
    return `Delete Cat ${id}`;
  }
}
