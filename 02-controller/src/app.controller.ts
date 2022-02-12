import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('routing')
  routing(): string {
    return 'Routing';
  }

  @Get('w*ldcard')
  wildcard(): string {
    return 'Wildcard';
  }

  @Get('request')
  request(@Req() req: Request): string {
    console.log(req);

    return 'Request';
  }
}
