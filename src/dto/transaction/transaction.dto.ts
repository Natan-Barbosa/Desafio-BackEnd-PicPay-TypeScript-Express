import { IsNumber, IsPositive, IsString } from "class-validator";

export class TransactionDto {

    @IsString()
    senderId: string;

    @IsString()
    receiverId: string;

    @IsNumber()
    @IsPositive()
    value: number;

    constructor(senderId: string, receiverId: string, value: number) {
        this.receiverId = receiverId
        this.senderId = senderId
        this.value = value;
    }
}