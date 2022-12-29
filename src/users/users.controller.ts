import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { CreateUserDto, LoginDto, VerifyEmailDto } from './dto';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return;
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
