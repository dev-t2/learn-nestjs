import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
  ParseArrayPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

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
  @Delete()
  deleteTodos(@Query('ids', new ParseArrayPipe()) ids: number[]) {
    return this.todosService.deleteTodos(ids);
  }

  @ApiOperation({ summary: 'Update Todo' })
  @Patch(':id')
  updateTodo(@Param('id', ParsePositiveIntPipe) id: number, @Body() updateTodoDto: UpdateTodoDto) {
    if (Object.keys(updateTodoDto).length) {
      return this.todosService.updateTodo(id, updateTodoDto);
    }

    throw new BadRequestException();
  }
}
