import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpDto } from './dto/sign-up.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { SignInDto } from './dto/sign-in.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    const { name, email, password } = signUpDto;
  }

  @Get('email-verification')
  async verifyEmail(@Query() verifyEmailDto: VerifyEmailDto): Promise<string> {
    console.log(verifyEmailDto);

    return;
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
