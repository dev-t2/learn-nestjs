import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { ITodo } from './todos.interface';
import { TagsService } from 'src/tags/tags.service';
import { CreateTodoDto, IFindTodo, UpdateTodoDto } from './todos.dto';

@Injectable()
export class TodosService {
  private todos: ITodo[] = [];

  constructor(private readonly tagsService: TagsService) {}

  createTodo({ content, name }: CreateTodoDto) {
    const tag = name ? this.tagsService.createTag({ name }) : null;

    const id = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1;
    const createdTodo: ITodo = {
      id,
      content: content.trim(),
      isComplete: false,
      tagId: tag?.id ?? null,
    };

    this.todos = [...this.todos, createdTodo];

    return createdTodo;
  }

  findTodos() {
    const todos: IFindTodo[] = this.todos.map(({ tagId, ...todo }) => {
      if (tagId) {
        const findTag = this.tagsService.findTag(tagId);

        return { ...todo, tag: findTag };
      }

      return { ...todo, tag: null };
    });

    return { todos };
  }

  deleteTodos(ids?: number[]) {
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

  updateTodo(id: number, { name, ...updateTodo }: UpdateTodoDto) {
    const findTodo = this.todos.find((todo) => todo.id === id);

    if (!findTodo) {
      throw new NotFoundException();
    }

    this.todos = this.todos.map((todo) => {
      if (todo.id === findTodo.id) {
        if (name) {
          const tag = this.tagsService.createTag({ name });

          return { ...todo, ...updateTodo, tagId: tag.id };
        }

        return { ...todo, ...updateTodo };
      }

      return todo;
    });
  }
}
