import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private isUserExists(email: string) {
    return false;
  }

  private saveUser(
    name: string,
    email: string,
    password: string,
    token: string,
  ) {
    return;
  }

  private async sendEmail(email: string, token: string) {
    return;
  }

  async signUp(name: string, email: string, password: string) {
    await this.isUserExists(email);

    const token = uuidv4();

    await this.saveUser(name, email, password, token);
    await this.sendEmail(email, token);
  }
}
