import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { hashedPass } from './hash';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async signUp(username: string, password: string) {
    const currentUser = await this.usersService.findUserByName(username);
    if (currentUser) {
      throw new UnauthorizedException('User already exists');
    }
    const hash = await hashedPass(password);
    return await this.usersService.addUser(username, hash);
  }

  async login(username: string, password: string) {
    const currentUser = await this.usersService.findUserByName(username);
    if (!currentUser) {
      throw new UnauthorizedException('Wrong password');
    }
    const hash = await hashedPass(password);
    const userHash = compare(currentUser.password, hash);
    if (!userHash) {
      throw new UnauthorizedException();
    }
    return currentUser;
  }
}
