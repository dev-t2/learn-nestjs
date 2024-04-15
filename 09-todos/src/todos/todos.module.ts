import { Module } from '@nestjs/common';

import { TagsModule } from 'src/tags/tags.module';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [TagsModule],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
