import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { TodosModule } from './todos/todos.module';
import { HttpLoggerMiddleware } from './common/middlewares';

@Module({
  imports: [TodosModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
