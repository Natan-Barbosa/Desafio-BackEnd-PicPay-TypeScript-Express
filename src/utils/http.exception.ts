import { StatusCodes } from "http-status-codes";

export class HttpException extends Error {
    title: string;
    code: StatusCodes;
    message: string;
    timeStamp: string;

    constructor(title: string, code: StatusCodes, message: string) {
        super(message)
        this.title = title;
        this.code = code;
        this.message = message
        this.timeStamp = new Date().toISOString();
    }
}