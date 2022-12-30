import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto, LoginDto, VerifyEmailDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @Post('email-verify')
  async verifyEmail(@Query() verifyEmailDto: VerifyEmailDto) {
    console.log(verifyEmailDto);

    return;
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    console.log(loginDto);

    return;
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    console.log(id);

    return;
  }
}
