import { WalletService } from "@/services/wallet.service";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { WalletCreateDto } from "@/dto/wallet/wallet.create.dto";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { IncreaseBalanceDto } from "@/dto/wallet/wallet.increase.dto";
import { logger } from "@/config/jet.logger.config";
import { HttpException } from "@/utils/http.exception";

@injectable()
export class WalletController {
    constructor(
        @inject("WalletService")
        private walletService: WalletService
    ) { }

    public async create(req: Request, res: Response) {
        try {
            const data: WalletCreateDto = req.body;
            const serviceResponse = await this.walletService.create(data);
            res.status(StatusCodes.CREATED).send(serviceResponse);
        } catch (error) {
            logger.err(error)
            throw new HttpException(ReasonPhrases.INTERNAL_SERVER_ERROR, StatusCodes.INTERNAL_SERVER_ERROR, "An Erro Ocorrend In Server")
        }

    }

    public async IncreaseBalance(req: Request, res: Response) {
        try {
            const data: IncreaseBalanceDto = req.body
            const serviceResponse = await this.walletService.IncreaseBalance(data)
            return res.status(StatusCodes.ACCEPTED).send(serviceResponse)
        } catch (error) {
            logger.err(error)
            throw new HttpException(ReasonPhrases.INTERNAL_SERVER_ERROR, StatusCodes.INTERNAL_SERVER_ERROR, "An Erro Ocorrend In Server")
        }

    }
}
