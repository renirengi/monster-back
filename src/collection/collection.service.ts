import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collection } from './entities/collection.entity';
import { UserService } from '../user/user.service';
import { DollService } from '../doll/doll.service';
import { Doll } from '../doll/entities';


@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private collectionsRepository: Repository<Collection>,
    private userService: UserService,
    private dollService: DollService,
  ) {}

  getAllCollections(): Promise<Collection[]> {
    return this.collectionsRepository.find();
  }
  async getAllCollectionsByID(userId: string): Promise<Collection[]> {
    const collections = await this.collectionsRepository.find({
      relations: {
        user: true,
      },
      where: {
        user: {
          id: userId,
        },
      },
    });
    return collections;
  }

  async createCollection(name: string, userId: string): Promise<Collection> {
    const collection = new Collection(name);
    const user = await this.userService.findUserById(userId);
    collection.user = user;
    await collection.save();
    return collection;
  }

  findCollectionById(id: string): Promise<Collection> {
    return this.collectionsRepository.findOne({ where: { id } });
  }

  async addDollsToCollection(collectionId: string, dollsIds: string[]) {
    const collection = await this.findCollectionById(collectionId);

    const dolls: Doll[] = [];
    for (let i = 0; i < dollsIds.length; i++) {
      const doll = await this.dollService.findDollById(dollsIds[i]);
      dolls.push(doll);
    }
    collection.dolls = dolls;
    collection.save();
    return collection;
  }
}
