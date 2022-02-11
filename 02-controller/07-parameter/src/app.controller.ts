import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':userId/post/:postId')
  getHello(
    @Param('userId') userId: string,
    @Param('postId') postId: string,
  ): string {
    console.log({ userId, postId });

    return this.appService.getHello();
  }
}
