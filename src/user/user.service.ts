import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  updateUser() {}
  async deleteUser(id: number) {
    const user = await this.findUserById(id);
    if (user) {
      await this.usersRepository.delete(id);
      return 'User successfully deleted';
    }
    throw new NotFoundException('No user exist with such id');
  }
  async findUserByName(username: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { username } });
  }
  async findUserById(id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async addUser(username: string, password: string): Promise<User> {
    const user = new User(username, password);
    await user.save();
    return user;
  }
}
