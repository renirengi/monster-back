import { Injectable } from '@nestjs/common';
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

  async addDoll(
    description: string,
    galleryImagesLinks: string[],
    modelNumber: string,
    year: string,
    type: string,
    exclusive?: string[],
    reissue?: boolean,
    video?: string,
    character?: string | string[],
    gender?: string[],
    series?: string,
  ): Promise<Doll> {
    const doll = new Doll(
      character,
      description,
      galleryImagesLinks,
      gender,
      modelNumber,
      series,
      year,
      type,
      exclusive,
      reissue,
      video,
    );
    await doll.save();
    return doll;
  }
}
