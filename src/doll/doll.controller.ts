import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { DollService } from './doll.service';
import { Doll } from './entities';
import { DollDto } from './dto/doll.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('doll')
@ApiTags('doll')
export class DollController {
  constructor(private readonly dollService: DollService) {}
  @Get('/getDolls')
  getAllDolls(): Promise<Doll[]> {
    return this.dollService.getAllDolls();
  }
  @Get('/findDoll')
  async findDoll(@Query('character') character: string): Promise<Doll[]> {
    return await this.dollService.findDoll(character);
  }
  @Delete('/deleteDoll')
  deleteDoll(@Param('id') id: string) {
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
      dollDto.character,
      dollDto.gender,
      dollDto.exclusive,
      dollDto.reissue,
      dollDto.video,
    );
  }
}
