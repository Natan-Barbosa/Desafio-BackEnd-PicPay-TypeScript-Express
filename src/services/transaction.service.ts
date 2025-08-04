import { TransactionDto } from "@/dto/transaction/transaction.dto";
import { TransactionRepository } from "@/repository/transaction.repository";
import { WalletRepository } from "@/repository/wallet.repository";
import { HttpException } from "@/utils/http.exception";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { inject, injectable } from "tsyringe";

@injectable()
export class TransactionService {

    constructor(
        @inject("TransactionRepository")
        private transactionRepository: TransactionRepository,

        @inject("WalletRepository")
        private walletRepository: WalletRepository
    ) { }

    public async create(dto: TransactionDto) {
        const receiver = await this.walletRepository.findByID(dto.receiverId);
        const sender = await this.walletRepository.findByID(dto.senderId)

        if (!receiver || !sender) {
            throw new HttpException(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST, "Receiver Or Send Not Found!")
        }

        if (Number(sender.balance) < dto.value) {
            throw new HttpException(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST, "You Don't Have Sufficient Balance To Transaction")
        }

        await this.transactionRepository.create(dto.value, dto.receiverId, dto.senderId);
    }

}