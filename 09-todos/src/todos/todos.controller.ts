import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @ApiOperation({ summary: 'Update Todo' })
  @Patch(':id')
  updateTodo(@Param('id', ParsePositiveIntPipe) id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.updateTodo(id, updateTodoDto);
  }

  @ApiOperation({ summary: 'Delete Todos' })
  @Delete(':id')
  deleteTodos(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.todosService.deleteTodos(id);
  }
}
