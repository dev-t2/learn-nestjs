import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUser() {
    return 'GetUser';
  }

  @Post('signup')
  signup() {
    return 'signup';
  }

  @Post('login')
  login() {
    return 'login';
  }

  @Post('logout')
  logout() {
    return 'logout';
  }

  @Post('upload')
  upload() {
    return 'upload';
  }
}
