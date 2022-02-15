export class SignUpDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export class VerifyEmailDto {
  readonly token: string;
}

export class SignInDto {
  readonly email: string;
  readonly password: string;
}
