import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doll } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class DollService {
  constructor(
    @InjectRepository(Doll)
    private dollsRepository: Repository<Doll>,
  ) {}

  getAllDolls(): Promise<Doll[]> {
    return this.dollsRepository.find();
  }

  updateDoll() {}
  async deleteDoll(id: number) {
    const doll = await this.findDollById(id);
    if (doll) {
      await this.dollsRepository.delete(id);
      return 'Doll successfully deleted';
    }
    throw new NotFoundException('No doll exist with such id');
  }
  findDoll(character: string): Promise<Doll[]> {
    return this.dollsRepository.find({ where: { character } });
  }
  findDollById(id: number): Promise<Doll> {
    return this.dollsRepository.findOne({ where: { id } });
  }
  async addDoll(
    character: string,
    description: string,
    // galleryImagesLinks: string[],
    // modelNumber: string,
    // year: string,
    // type: string,
    // exclusive?: string,
    // reissue?: boolean,
    // video?: string,
    // gender?: string[] | string,
    // series?: string,
  ): Promise<Doll> {
    const doll = new Doll(
      character,
      description,
      // galleryImagesLinks,
      // gender,
      // modelNumber,
      // series,
      // year,
      // type,
      // exclusive,
      // reissue,
      // video,
    );
    await doll.save();
    return doll;
  }
}
