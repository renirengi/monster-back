import { Test, TestingModule } from '@nestjs/testing';
import { DollController } from './doll.controller';

describe('DollController', () => {
  let controller: DollController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DollController],
    }).compile();

    controller = module.get<DollController>(DollController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
