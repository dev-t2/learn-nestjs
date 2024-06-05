import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { CachingsService } from './cachings.service';

@Controller('cachings')
export class CachingsController {
  constructor(private readonly cachingsService: CachingsService) {}

  @Post()
  async createCaching() {
    return await this.cachingsService.createCaching();
  }

  @Get()
  async findCaching() {
    return await this.cachingsService.findCaching();
  }

  @Put()
  updateCaching() {
    return this.cachingsService.updateCaching();
  }

  @Delete()
  async deleteCaching() {
    return await this.cachingsService.deleteCaching();
  }
}
