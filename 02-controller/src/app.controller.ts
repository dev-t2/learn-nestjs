import {
  BadRequestException,
  Controller,
  Get,
  Header,
  HttpCode,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
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

  @Get('response')
  response(@Res() res: Response) {
    console.log(res);

    return res.status(200).send('Response');
  }

  @Get('http-code')
  @HttpCode(200)
  httpCode(): string {
    return 'Http Code';
  }

  @Get('throw')
  throw(): string {
    throw new BadRequestException('BadRequestException');

    return 'Throw';
  }

  @Get('header')
  @Header('Custom', 'Custom Header')
  header(): string {
    return 'Header';
  }
}
