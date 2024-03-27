import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ParsePositiveIntPipe } from 'src/common/pipes';
import { TodosService } from './todos.service';
import { CreateTodoDto, UpdateTodoDto } from './todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
  }

  @Get()
  findTodos() {
    return this.todosService.findTodos();
  }

  @Patch(':id')
  updateTodo(@Param('id', ParsePositiveIntPipe) id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  deleteTodos(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.todosService.deleteTodos(id);
  }
}
