import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';
import { HttpLoggerMiddleware } from './common/middlewares';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
