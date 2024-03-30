import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger';

import { ITodo } from './todo.interface';

export class CreateTodoDto extends PickType(ITodo, ['content'] as const) {}

export class CreateTodoResponse extends ITodo {}

export class FindTodosResponse {
  @ApiProperty({ type: [ITodo] })
  todos: ITodo[];
}

export class UpdateTodoDto extends PartialType(OmitType(ITodo, ['id'] as const)) {}
