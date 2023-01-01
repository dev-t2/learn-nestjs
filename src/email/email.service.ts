import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });
  }

  async sendEmail(email: string, token: string) {
    return await this.transporter.sendMail({
      to: email,
      subject: '가입 인증 메일',
      html: `
        확인 버튼을 누르시면 가입 인증이 완료됩니다. </br>

        <form action="${process.env.BASE_URL}/users/email-verify?token=${token}" method="post">
          <button>확인</button>
        </form>
      `,
    });
  }
}
