import { Test, TestingModule } from '@nestjs/testing';
import { DollService } from './doll.service';

describe('DollService', () => {
  let service: DollService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DollService],
    }).compile();

    service = module.get<DollService>(DollService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
