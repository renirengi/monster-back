import { Module } from '@nestjs/common';
import { DollService } from './doll.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doll } from './entities';
import { DollController } from './doll.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Doll])],
  providers: [DollService],
  exports: [DollService],
  controllers: [DollController],
})
export class DollModule {}
