import { IsNumber, IsPositive, IsString, Length } from "class-validator";

export class IncreaseBalanceDto {

    @Length(11, 14)
    @IsString()
    cpfOrCnpj: string;

    @IsNumber()
    @IsPositive()
    value: number;

    constructor(cpfOrCpnj: string, value: number) {
        this.cpfOrCnpj = cpfOrCpnj
        this.value = value
    }
}