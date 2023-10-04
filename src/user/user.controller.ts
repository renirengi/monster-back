import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { plainToClass } from 'class-transformer';
import { UserDto } from './dto/user.dto';
import { UserViewDto } from './dto/userView.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/getUsers')
  async getAllUsers(): Promise<UserViewDto[]> {
    const users = await this.userService.getAllUsers();
    return plainToClass(UserViewDto, users, { excludeExtraneousValues: true });
  }

  @Get('/findUser')
  async findUser(@Query('username') username: string): Promise<UserViewDto> {
    const foundUser = await this.userService.findUserByName(username);
    return plainToClass(UserViewDto, foundUser, {
      excludeExtraneousValues: true,
    });
  }

  @Delete('/deleteUser')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }

  @Post('/updateUser')
  updateUser() {}

  @Post('/createUser')
  async addUser(
    @Body()
    userDto: UserDto,
  ) {
    const addedUser = await this.userService.addUser(
      userDto.username,
      userDto.password,
    );
    return plainToClass(UserViewDto, addedUser, {
      excludeExtraneousValues: true,
    });
  }
}
