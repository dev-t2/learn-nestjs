import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findCats() {
    return 'Find Cats';
  }
}
