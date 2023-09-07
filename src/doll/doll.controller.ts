import { Body, Controller, Get, Post } from '@nestjs/common';
import { DollService } from './doll.service';
import { Doll } from './entities';

@Controller('doll')
export class DollController {
  constructor(private readonly dollService: DollService) {}
  @Get('/getDolls')
  getAllDolls(): Promise<Doll[]> {
    return this.dollService.getAllDolls();
  }
  @Post('/createDoll')
  addDoll(
    @Body()
    {
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
    },
  ) {
    return this.dollService.addDoll(
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
  }
}
