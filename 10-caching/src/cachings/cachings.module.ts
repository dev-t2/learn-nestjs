import { Module } from '@nestjs/common';

import { CachingsController } from './cachings.controller';
import { CachingsService } from './cachings.service';

@Module({
  controllers: [CachingsController],
  providers: [CachingsService],
})
export class CachingsModule {}
