import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignInDto, SignUpDto, VerifyEmailDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    const { name, email, password } = signUpDto;

    await this.usersService.signUp(name, email, password);
  }

  @Post('email-verification')
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
