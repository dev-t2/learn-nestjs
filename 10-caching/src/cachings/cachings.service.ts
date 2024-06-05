import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CachingsService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async createCaching() {
    return await this.cacheManager.set('key', 'value');
  }

  async findCaching() {
    return await this.cacheManager.get('key');
  }

  async updateCaching() {
    return await this.cacheManager.set('key', 'updatedValue');
  }

  async deleteCaching() {
    return await this.cacheManager.del('key');
  }
}
