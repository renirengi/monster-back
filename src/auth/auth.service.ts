import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { hashedPass } from './hash';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthRedisStorage } from './auth.redis.storage';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private authRedisStorage: AuthRedisStorage,
  ) {}

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
    const payload = { sub: currentUser.id, username: currentUser.username };

    const tokens = {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: await this.jwtService.signAsync(payload),
    };
    await this.authRedisStorage.set(currentUser.id, tokens.refreshToken);
    return tokens;
  }

  async refreshToken(token: string) {
    const user = await this.verifyToken(token);
    this.verifyTokenInRedis(user.sub, token);

    const payload = { sub: user.sub, username: user.username };

    const tokens = {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: await this.jwtService.signAsync(payload),
    };
    await this.authRedisStorage.set(user.sub, tokens.refreshToken);
    return tokens;
  }

  async verifyToken(token: any) {
    try {
      return await this.jwtService.verifyAsync(token);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async verifyTokenInRedis(id: string, token: string) {
    try {
      const redisToken = await this.authRedisStorage.get(id);
      if (redisToken == token) {
        return true;
      }
    } catch (error) {
      throw new UnauthorizedException('There is no such token in exception');
    }
  }
}
