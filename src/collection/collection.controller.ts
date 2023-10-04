import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { Collection } from './entities';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get('/getAllCollectionsById')
  getAllCollectionsById(@Param('id') userId: number): Promise<Collection[]> {
    return this.collectionService.getAllCollectionsByID(userId);
  }

  @Post('/createCollection')
  addCollection(
    @Body()
    { name, userId },
  ) {
    return this.collectionService.createCollection(name, userId);
  }

  @Post('/addDollsToCollection')
  addDollsToCollection(
    @Body()
    { collectionId, dollsIds },
  ) {
    return this.collectionService.addDollsToCollection(collectionId, dollsIds);
  }
}
