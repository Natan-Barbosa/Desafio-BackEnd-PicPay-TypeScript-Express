import { TransactionDto } from "@/dto/transaction/transaction.dto";
import { TransactionService } from "@/services/transaction.service";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { inject, injectable } from "tsyringe";

@injectable()
export class TransactionController {

    constructor(
        @inject("TransactionService")
        private transactionService: TransactionService
    ) { }

    public async create(req: Request, res: Response) {
        const data: TransactionDto = req.body
        const serviceResponse = await this.transactionService.create(data)
        return res.status(StatusCodes.CREATED).send(serviceResponse);
    }
}