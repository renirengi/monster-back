import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { plainToClass } from 'class-transformer';
import { UserDto } from './Dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/getUsers')
  async getAllUsers(): Promise<UserDto[]> {
    const users = await this.userService.getAllUsers();
    return plainToClass(UserDto, users, { excludeExtraneousValues: true });
  }

  @Get('/findUser')
  async findUser(@Body() { username }): Promise<UserDto> {
    const foundUser = await this.userService.findUserByName(username);
    return plainToClass(UserDto, foundUser, { excludeExtraneousValues: true });
  }

  @Delete('/deleteUser')
  deleteUser(@Body() { id }) {
    return this.userService.deleteUser(id);
  }

  @Post('/updateUser')
  updateUser() {}

  @Post('/createUser')
  async addUser(
    @Body()
    { username, password },
  ) {
    const addedUser = await this.userService.addUser(username, password);
    return plainToClass(UserDto, addedUser, { excludeExtraneousValues: true });
  }
}
