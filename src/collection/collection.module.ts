import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { Collection } from './entities';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Collection]), UserModule],
  providers: [CollectionService],
  exports: [CollectionService],
  controllers: [CollectionController],
})
export class CollectionModule {}
