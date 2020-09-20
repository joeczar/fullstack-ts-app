import { JsonController, Param, Body, Get, Post, Put, Delete, Req, Res } from 'routing-controllers';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../entities';
import { ApiBase } from './Base.controller';
import { classToClassFromExist } from 'class-transformer';

@JsonController('/api/users')
export class UserController extends ApiBase {
  private userRepository = getRepository(User);

  @Get('')
  private async getAll() {
    const users = await this.userRepository.find();
    return users;
  }
  @Get('/:id')
  getOne(@Param('id') id: User['id']) {
    return this.userRepository.findOne(id);
  }

  @Post('/new-user')
  post(@Body() user: User) {
    const {first, last, email, hash} = user

    const saveUser = new User(first, last, email, hash)
    return this.userRepository.insert(saveUser);
  }

  @Put('/:id')
  private put(@Param('id') id: number, @Body() user: any) {
    return 'Updating a user...';
  }

  @Delete('/:id')
  private remove(@Param('id') id: number) {
    return 'Removing user...';
  }
}
