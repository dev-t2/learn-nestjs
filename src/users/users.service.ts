import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
  async createUser(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
