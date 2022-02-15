import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class UsersService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'GMAIL',
        pass: 'PASSWORD',
      },
    });
  }

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
    const baseUrl = 'http://localhost:3000';
    const url = `${baseUrl}/users/email-verification?token=${token}`;

    await this.transporter.sendMail({
      to: email,
      subject: '가입 인증 메일',
      html: `
        <p>가입 확인 버튼을 누르시면 가입 인증이 완료됩니다.</p>

        <form method="POST" action="${url}">
          <button>가입 확인</button>
        </form>
      `,
    });
  }

  async signUp(name: string, email: string, password: string) {
    await this.isUserExists(email);

    const token = uuidv4();

    await this.saveUser(name, email, password, token);
    await this.sendEmail(email, token);
  }
}
