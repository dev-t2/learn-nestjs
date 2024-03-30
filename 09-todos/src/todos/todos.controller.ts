import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  BadRequestException,
  ParseArrayPipe,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { ParsePositiveIntPipe } from 'src/common/pipes';
import { TodosService } from './todos.service';
import { CreateTodoDto, CreateTodoResponse, FindTodosResponse, UpdateTodoDto } from './todos.dto';

@ApiTags('Todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @ApiOperation({ summary: 'Create Todo' })
  @ApiCreatedResponse({ type: CreateTodoResponse })
  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
  }

  @ApiOperation({ summary: 'Find Todos' })
  @ApiOkResponse({ type: FindTodosResponse })
  @Get()
  findTodos() {
    return this.todosService.findTodos();
  }

  @ApiOperation({ summary: 'Delete Todos' })
  @ApiQuery({ name: 'ids', type: String, required: false })
  @Delete()
  deleteTodos(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',', optional: true }))
    ids?: number[],
  ) {
    return this.todosService.deleteTodos(ids);
  }

  @ApiOperation({ summary: 'Update Todo' })
  @Put(':id')
  updateTodo(@Param('id', ParsePositiveIntPipe) id: number, @Body() updateTodoDto: UpdateTodoDto) {
    if (Object.keys(updateTodoDto).length > 0) {
      return this.todosService.updateTodo(id, updateTodoDto);
    }

    throw new BadRequestException();
  }
}
