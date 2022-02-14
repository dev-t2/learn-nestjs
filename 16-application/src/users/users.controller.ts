import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { VerifyEmailDto } from './dto/verify-email.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

@Controller('users')
export class UsersController {
  @Post('email-verification')
  async verifyEmail(@Body() verifyEmailDto: VerifyEmailDto): Promise<string> {
    console.log(verifyEmailDto);

    return;
  }

  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    console.log(signUpDto);
  }

  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto): Promise<string> {
    console.log(signInDto);

    return;
  }

  @Get(':id')
  async readUserInfo(@Param('id') userId: string): Promise<void> {
    console.log(userId);

    return;
  }
}
