import { walletType } from "@/generated/prisma/enums";
import {
  IsEmail,
  IsEnum,
  IsString,
  Length,
} from "class-validator";

export class WalletCreateDto {
  @IsString()
  fullName: string;

  @IsString()
  @Length(11, 14)
  cpfOrCnpj: string;

  @IsString()
  @IsEmail()
  email: string;

  balance: number;

  @IsString()
  @Length(8, 64)
  password: string;

  @IsEnum(walletType)
  walletType: walletType;

  constructor(
    fullName: string,
    cpfOrCnpj: string,
    email: string,
    password: string,
    walletType: walletType
  ) {
    this.fullName = fullName;
    this.cpfOrCnpj = cpfOrCnpj;
    this.email = email;
    this.balance = 0;
    this.password = password;
    this.walletType = walletType;
  }
}
