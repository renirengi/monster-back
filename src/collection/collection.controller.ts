import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { Collection } from './entities';
import { ApiTags } from '@nestjs/swagger';

@Controller('collection')
@ApiTags('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get('/getAllCollectionsById')
  getAllCollectionsById(@Param('id') userId: string): Promise<Collection[]> {
    return this.collectionService.getAllCollectionsByID(userId);
  }

  @Post('/createCollection')
  addCollection(@Param('id') id: string, @Query('name') name: string) {
    return this.collectionService.createCollection(name, id);
  }

  @Post('/addDollsToCollection')
  addDollsToCollection(
    @Param('id') id: string,
    @Query('dollsId') dollsId: string[],
  ) {
    return this.collectionService.addDollsToCollection(id, dollsId);
  }
}
