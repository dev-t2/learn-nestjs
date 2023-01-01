import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';

import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });
  }

  async createUser({ email }: CreateUserDto) {
    const token = uuidv4();

    const result = await this.transporter.sendMail({
      to: email,
      subject: '가입 인증 메일',
      html: `
        확인 버튼을 누르시면 가입 인증이 완료됩니다. </br>

        <form action="${process.env.BASE_URL}/users/email-verify?token=${token}" method="post">
          <button>확인</button>
        </form>
      `,
    });

    return result;
  }
}
