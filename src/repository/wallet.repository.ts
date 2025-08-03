import { WalletCreateDto } from "@/dto/wallet/wallet.create.dto";
import { PrismaClient } from "@/generated/prisma/client";
import { injectable } from "tsyringe";

const prisma = new PrismaClient();

@injectable()
export class WalletRepository {
  public async create(dto: WalletCreateDto) {
    return await prisma.wallet.create({
      data: {
        balance: dto.balance,
        cpfOrCnpj: dto.cpfOrCnpj,
        email: dto.email,
        fullName: dto.fullName,
        password: dto.password,
        walletType: dto.walletType,
      },
    });
  }
}
