import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';

import { AppService } from './app.service';

// localhost:3000
// @Controller()

// localhost:3000/cats
@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // localhost:3000/cats
  @Get()
  getHello1(): string {
    return this.appService.getHello();
  }

  // localhost:3000/cats/hello
  @Get('hello/:id/:name')
  getHello2(
    @Req() req: Request,
    @Body() body,
    @Param('id') id: string,
    @Param('name') name: string,
  ): string {
    console.log(req);
    console.log(body);
    console.log({ id, name });

    return this.appService.getHello();
  }
}
