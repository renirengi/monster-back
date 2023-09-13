import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { DollService } from './doll.service';
import { Doll } from './entities';

@Controller('doll')
export class DollController {
  constructor(private readonly dollService: DollService) {}
  @Get('/getDolls')
  getAllDolls(): Promise<Doll[]> {
    return this.dollService.getAllDolls();
  }
  @Get('/findDoll')
  findDoll(@Body() { character }): Promise<Doll[]> {
    return this.dollService.findDoll(character);
  }
  @Delete('/deleteDoll')
  deleteDoll(@Body() { id }) {
    return this.dollService.deleteDoll(id);
  }
  @Post('/updateDoll')
  updateDoll() {}
  @Post('/createDoll')
  addDoll(
    @Body()
    {
      description,
      galleryImagesLinks,
      modelNumber,
      series,
      year,
      type,
      gender,
      character,
      exclusive,
      reissue,
      video,
    },
  ) {
    return this.dollService.addDoll(
      description,
      galleryImagesLinks,
      modelNumber,
      series,
      year,
      type,
      gender,
      character,
      exclusive,
      reissue,
      video,
    );
  }
}
