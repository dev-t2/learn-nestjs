import { Test, TestingModule } from '@nestjs/testing';

import { CachingsController } from './cachings.controller';

describe('CachingsController', () => {
  let controller: CachingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CachingsController],
    }).compile();

    controller = module.get<CachingsController>(CachingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
