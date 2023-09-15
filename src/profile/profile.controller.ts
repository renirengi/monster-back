import { Body, Controller, Get, Post } from '@nestjs/common';
import { Profile } from './entities';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Get('/getAllProfiles')
  getAllDolls(): Promise<Profile[]> {
    return this.profileService.getAllProfiles();
  }

  @Post('/createProfile')
  addProfile(
    @Body()
    { email, birthDate, userId },
  ) {
    return this.profileService.createProfile(email, birthDate, userId);
  }
}
