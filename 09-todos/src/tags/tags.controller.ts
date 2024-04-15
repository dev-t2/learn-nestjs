import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ParsePositiveIntPipe } from 'src/common/pipes';
import { TagsService } from './tags.service';
import { CreateTagDto, CreateTagResponse, FindTagsResponse, UpdateTagDto } from './tags.dto';

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @ApiOperation({ summary: 'Create Tag' })
  @ApiCreatedResponse({ type: CreateTagResponse })
  @Post()
  createTag(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.createTag(createTagDto);
  }

  @ApiOperation({ summary: 'Find Tags' })
  @ApiOkResponse({ type: FindTagsResponse })
  @Get()
  findTodos() {
    return this.tagsService.findTags();
  }

  @ApiOperation({ summary: 'Update Tag' })
  @Put(':id')
  updateTodo(@Param('id', ParsePositiveIntPipe) id: number, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.updateTag(id, updateTagDto);
  }

  @ApiOperation({ summary: 'Delete Tag' })
  @Delete(':id')
  deleteTag(@Param('id', ParsePositiveIntPipe) id: number) {
    return this.tagsService.deleteTag(id);
  }
}
