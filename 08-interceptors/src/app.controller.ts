import { Controller, Get } from '@nestjs/common';

import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getHello(): string {
    return this.catsService.getHello();
  }
}
