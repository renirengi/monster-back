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
  async deleteDoll(id: string) {
    const doll = await this.findDollById(id);
    if (doll) {
      await this.dollsRepository.delete(id);
      return 'Doll successfully deleted';
    }
    throw new NotFoundException('No doll exist with such id');
  }
  async findDoll(character: string): Promise<Doll[]> {
    return await this.dollsRepository.find({ where: { character } });
  }

  async findDollById(id: string): Promise<Doll> {
    return await this.dollsRepository.findOne({ where: { id } });
  }

  async addDoll(
    description: string,
    galleryImagesLinks: string[],
    modelNumber: string,
    series: string,
    year: string,
    type: string,
    character?: string[],
    gender?: string[],
    exclusive?: string,
    reissue?: boolean,
    video?: string,
  ): Promise<Doll> {
    const doll = new Doll(
      description,
      galleryImagesLinks,
      modelNumber,
      series,
      year,
      type,
      character,
      gender,
      exclusive,
      reissue,
      video,
    );
    await doll.save();
    return doll;
  }
}
