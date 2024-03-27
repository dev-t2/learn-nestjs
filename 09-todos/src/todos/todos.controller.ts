import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { ParsePositiveIntPipe } from 'src/common/pipes';
import { TodosService } from './todos.service';
import { CreateTodoDto, UpdateTodoDto } from './todos.dto';

@ApiTags('Todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @ApiOperation({ summary: 'Create Todo' })
  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
  }

  @ApiOperation({ summary: 'Find Todos' })
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
