import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { HttpLoggerMiddleware } from './common/middlewares';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
