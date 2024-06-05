import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';

import { CachingsModule } from './cachings/cachings.module';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';
import { HttpLoggerMiddleware } from './common/middlewares';

@Module({
  imports: [CacheModule.register({ isGlobal: true }), CachingsModule, CatsModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
