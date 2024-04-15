import { ApiProperty, IntersectionType, OmitType, PartialType, PickType } from '@nestjs/swagger';

import { ITag } from 'src/tags/tags.interface';
import { ITodo } from './todos.interface';

export class CreateTodoDto extends IntersectionType(
  PickType(ITodo, ['content'] as const),
  PickType(ITag, ['name'] as const),
) {}

export class CreateTodoResponse extends ITodo {}

export class FindTodosResponse {
  @ApiProperty({ type: [ITodo] })
  todos: ITodo[];
}

export class UpdateTodoDto extends PartialType(OmitType(ITodo, ['id'] as const)) {}
