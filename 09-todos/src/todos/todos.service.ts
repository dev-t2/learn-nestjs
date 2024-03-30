import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { ITodo } from './todo.interface';
import { CreateTodoDto, UpdateTodoDto } from './todos.dto';

@Injectable()
export class TodosService {
  private todos: ITodo[] = [];

  createTodo({ content }: CreateTodoDto) {
    const length = this.todos.length;
    const id = length > 0 ? this.todos[length - 1].id + 1 : 1;
    const todo: ITodo = { id, content: content.trim(), isComplete: false };

    this.todos = [...this.todos, todo];

    return todo;
  }

  findTodos() {
    return this.todos;
  }

  deleteTodos(ids: number[]) {
    if (ids) {
      const deleteIds = this.todos.reduce((result: number[], todo) => {
        return ids.includes(todo.id) ? [...result, todo.id] : result;
      }, []);

      if (ids.length !== deleteIds.length) {
        throw new BadRequestException();
      }

      this.todos = this.todos.filter((todo) => !deleteIds.includes(todo.id));
    } else {
      this.todos = [];
    }
  }

  updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
    const findTodo = this.todos.find((todo) => todo.id === id);

    if (!findTodo) {
      throw new NotFoundException();
    }

    this.todos = this.todos.map((todo) => {
      return todo.id === findTodo.id ? { ...todo, ...updateTodoDto } : todo;
    });
  }
}
