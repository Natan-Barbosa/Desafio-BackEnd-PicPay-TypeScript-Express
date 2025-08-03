import { WalletService } from "@/services/wallet.service";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { WalletCreateDto } from "@/dto/wallet/wallet.create.dto";
import { StatusCodes } from "http-status-codes";
import { IncreaseBalanceDto } from "@/dto/wallet/wallet.increase.dto";

@injectable()
export class WalletController {
    constructor(
        @inject("WalletService")
        private walletService: WalletService
    ) { }

    public async create(req: Request, res: Response) {
        const data: WalletCreateDto = req.body;
        const serviceResponse = await this.walletService.create(data);
        res.status(StatusCodes.CREATED).send(serviceResponse);
    }

    public async IncreaseBalance(req: Request, res: Response) {
        const data: IncreaseBalanceDto = req.body
        const serviceResponse = await this.walletService.IncreaseBalance(data)
        return res.status(StatusCodes.ACCEPTED).send(serviceResponse)
    }
}
