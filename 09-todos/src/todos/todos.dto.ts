import { ApiProperty, IntersectionType, OmitType, PartialType, PickType } from '@nestjs/swagger';

import { ITag } from 'src/tags/tags.interface';
import { ITodo } from './todos.interface';

export class CreateTodoDto extends IntersectionType(
  PickType(ITodo, ['content'] as const),
  PartialType(PickType(ITag, ['name'] as const)),
) {}

export class CreateTodoResponse extends ITodo {}

export class FindTodo extends OmitType(ITodo, ['tagId'] as const) {
  @ApiProperty({ type: ITag, nullable: true })
  tag: ITag | null;
}

export class FindTodosResponse {
  @ApiProperty({ type: [FindTodo] })
  todos: FindTodo[];
}

export class UpdateTodoDto extends IntersectionType(
  PartialType(OmitType(ITodo, ['id', 'tagId'] as const)),
  PartialType(OmitType(ITag, ['id'] as const)),
) {}
