import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collection } from './entities/collection.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private collectionsRepository: Repository<Collection>,
    private userService: UserService,
  ) {}

  getAllCollections(): Promise<Collection[]> {
    return this.collectionsRepository.find();
  }
  getAllCollectionsByID(userId: number): Promise<Collection[]> {
    return this.collectionsRepository.find({ where: { user.id: userId } });
  }

  async createCollection(name: string, userId: number): Promise<Collection> {
    const collection = new Collection(name);
    const user = await this.userService.findUserById(userId);
    collection.user = user;
    await collection.save();
    return collection;
  }
}
