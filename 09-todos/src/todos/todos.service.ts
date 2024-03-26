import { Injectable } from '@nestjs/common';

import { CreateTodoDto, UpdateTodoDto } from './todos.dto';

@Injectable()
export class TodosService {
  create(createTodoDto: CreateTodoDto) {
    console.log(createTodoDto);

    return 'This action adds a new todo';
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    console.log(updateTodoDto);

    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
