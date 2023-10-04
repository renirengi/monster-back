import { Controller, Get, Param, Post, Query } from '@nestjs/common';
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
  addCollection(@Param('id') id: number, @Query('name') name: string) {
    return this.collectionService.createCollection(name, id);
  }

  @Post('/addDollsToCollection')
  addDollsToCollection(
    @Param('id') id: number,
    @Query('dollsId') dollsId: number[],
  ) {
    return this.collectionService.addDollsToCollection(id, dollsId);
  }
}
