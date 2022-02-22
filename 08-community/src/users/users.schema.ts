import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User {
  @IsNotEmpty()
  @IsEmail()
  @Prop({ required: true, unique: true })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(10)
  @Prop({ required: true, unique: true })
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(12)
  @Prop({ required: true })
  password: string;

  @IsString()
  @Prop()
  avatar: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
