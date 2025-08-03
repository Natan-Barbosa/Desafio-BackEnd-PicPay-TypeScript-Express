import { IsEmail, IsNumber, IsPositive, IsString, Length } from "class-validator";

export class IncreaseBalanceDto {

    @Length(11, 14)
    @IsString()
    cpfOrCnpj: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsNumber()
    @IsPositive()
    value: number;

    constructor(cpfOrCpnj: string, email: string, value: number) {
        this.cpfOrCnpj = cpfOrCpnj
        this.email = email
        this.value = value
    }
}