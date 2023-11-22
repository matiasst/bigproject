import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserEntity } from './user.entity';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUsers() {
    return await this.appService.getAllUsers();
  }

  @Post()
  async saveUser(@Body() payload: UserEntity) {
    return await this.appService.saveOneUser(payload);
  }
}
