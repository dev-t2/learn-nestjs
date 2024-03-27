import { OmitType, PartialType, PickType } from '@nestjs/swagger';

import { Todo } from './todo.entity';

export class CreateTodoDto extends PickType(Todo, ['content'] as const) {}

export class UpdateTodoDto extends PartialType(OmitType(Todo, ['id'] as const)) {}
