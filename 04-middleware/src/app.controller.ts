import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request,
    @Param()
    param: {
      id: string;
      name: string;
    },
  ): string {
    console.log(req);
    console.log(param);

    return this.appService.getHello();
  }
}
