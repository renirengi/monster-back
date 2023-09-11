import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities';
import { plainToClass } from 'class-transformer';
import { UserDto } from './Dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/getUsers')
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get('/findUser')
  async findUser(@Body() { username }): Promise<UserDto> {
    const foundUser = await this.userService.findUserByName(username);
    return plainToClass(UserDto, foundUser);
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
    return plainToClass(UserDto, addedUser);
  }
}
