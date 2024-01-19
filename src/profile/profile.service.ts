import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
    private userService: UserService,
  ) {}

  getAllProfiles(): Promise<Profile[]> {
    return this.profilesRepository.find();
  }

  async createProfile(
    email: string,
    birthDate: Date,
    userId: string,
  ): Promise<Profile> {
    const profile = new Profile(email, birthDate);
    const user = await this.userService.findUserById(userId);
    profile.user = user;
    await profile.save();
    return profile;
  }
}
