import { ApiProperty } from '@nestjs/swagger';

export class CharacterDto {
  @ApiProperty()
  character: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  art: string;

  @ApiProperty()
  icon: string;

  @ApiProperty()
  plot: string;
}
