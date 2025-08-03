import { WalletCreateDto } from "@/dto/wallet/wallet.create.dto";
import { WalletRepository } from "@/repository/wallet.repository";
import { HttpException } from "@/utils/http.exception";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { inject, injectable } from "tsyringe";

@injectable()
export class WalletService {
  constructor(
    @inject("WalletRepository") private walletRepository: WalletRepository
  ) { }

  public async create(dto: WalletCreateDto) {
    const wallet = await this.walletRepository.
      findByEmailOrCpfCnpj(dto.email, dto.cpfOrCnpj)
    if (wallet) {
      throw new HttpException(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST, "Wallet Already Exists")
    }
    return await this.walletRepository.create(dto);
  }
}
