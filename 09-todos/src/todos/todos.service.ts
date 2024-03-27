import { Injectable } from '@nestjs/common';

import { CreateTodoDto, UpdateTodoDto } from './todos.dto';

@Injectable()
export class TodosService {
  createTodo(createTodoDto: CreateTodoDto) {
    return createTodoDto;
  }

  findTodos() {
    return;
  }

  updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
    return { id, ...updateTodoDto };
  }

  deleteTodos(id: number) {
    return { id };
  }
}
