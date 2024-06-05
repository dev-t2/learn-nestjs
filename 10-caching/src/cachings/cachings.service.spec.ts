import { Test, TestingModule } from '@nestjs/testing';

import { CachingsService } from './cachings.service';

describe('CachingsService', () => {
  let service: CachingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CachingsService],
    }).compile();

    service = module.get<CachingsService>(CachingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
