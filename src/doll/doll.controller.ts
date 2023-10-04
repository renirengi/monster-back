import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DollService } from './doll.service';
import { Doll } from './entities';
import { DollDto } from './dto/doll.dto';

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
  deleteDoll(@Param('id') id: number) {
    return this.dollService.deleteDoll(id);
  }
  @Post('/updateDoll')
  updateDoll() {}

  @Post('/createDoll')
  addDoll(
    @Body()
    dollDto: DollDto,
  ) {
    return this.dollService.addDoll(
      dollDto.description,
      dollDto.galleryImagesLinks,
      dollDto.modelNumber,
      dollDto.series,
      dollDto.year,
      dollDto.type,
      dollDto.gender,
      dollDto.character,
      dollDto.exclusive,
      dollDto.reissue,
      dollDto.video,
    );
  }
}
