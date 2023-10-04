import { ApiProperty } from '@nestjs/swagger';

export class DollDto {
  @ApiProperty()
  description: string;

  @ApiProperty()
  galleryImagesLinks: string[];

  @ApiProperty()
  modelNumber: string;

  @ApiProperty()
  series: string;

  @ApiProperty()
  year: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  character: string[];

  @ApiProperty()
  gender: string[];

  @ApiProperty()
  exclusive: string;

  @ApiProperty()
  reissue: boolean;

  @ApiProperty()
  video: string;
}
