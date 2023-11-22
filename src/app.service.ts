import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class AppService {
  
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}


  async saveOneUser(userData: UserEntity): Promise<void> {
    try {
      await this.usersRepository.save(userData);
    } catch (error) {
      console.error(error);
    }
  }


  async getAllUsers(): Promise<UserEntity[]> {
    try {
      return await this.usersRepository.find();
    } catch (error) {
      console.error(error);
    }
  }
}
