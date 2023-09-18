import { Body, Controller, Get, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { Collection } from './entities';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}
  @Get('/getAllCollections')
  getAllCollections(): Promise<Collection[]> {
    return this.collectionService.getAllCollections();
  }

  @Post('/createCollection')
  addCollection(
    @Body()
    { name, userId },
  ) {
    return this.collectionService.createCollection(name, userId);
  }
}
