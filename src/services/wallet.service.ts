import { WalletCreateDto } from "@/dto/wallet/wallet.create.dto";
import { WalletRepository } from "@/repository/wallet.repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class WalletService {
  constructor(
    @inject("WalletRepository") private walletRepository: WalletRepository
  ) {}

  public async create(dto: WalletCreateDto) {
    return await this.walletRepository.create(dto);
  }
}
