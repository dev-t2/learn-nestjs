import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { TagsService } from './tags.service';
import { CreateTagDto, CreateTagResponse, FindTagsResponse } from './tags.dto';

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
}
