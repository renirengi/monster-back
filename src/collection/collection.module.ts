import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { Collection } from './entities';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DollModule } from 'src/doll/doll.module';

@Module({
  imports: [TypeOrmModule.forFeature([Collection]), UserModule, DollModule],
  providers: [CollectionService],
  exports: [CollectionService],
  controllers: [CollectionController],
})
export class CollectionModule {}
