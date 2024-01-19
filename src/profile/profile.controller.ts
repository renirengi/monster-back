import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Profile } from './entities';
import { ProfileService } from './profile.service';
import { ProfileDto } from './dto/profile.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('profile')
@ApiTags('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Get('/getAllProfiles')
  getAllDolls(): Promise<Profile[]> {
    return this.profileService.getAllProfiles();
  }

  @Post('/createProfile')
  addProfile(
    @Param('id') id: string,
    @Body()
    profileDto: ProfileDto,
  ) {
    return this.profileService.createProfile(
      profileDto.email,
      profileDto.birthDate,
      id,
    );
  }
}
