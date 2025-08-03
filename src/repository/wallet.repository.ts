import { WalletCreateDto } from "@/dto/wallet/wallet.create.dto";
import { IncreaseBalanceDto } from "@/dto/wallet/wallet.increase.dto";
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
      select: {
        password: false
      }
    });
  }

  public async findByEmailOrCpfCnpj(email: string, cpfOrCnpj: string) {
    return await prisma.wallet.findFirst({
      where: {
        OR: [{ email: email }, { cpfOrCnpj: cpfOrCnpj }]
      },
    })
  }

  public async findByCpfCnpj(cpfOrCnpj: string) {
    return await prisma.wallet.findUnique({
      where: {
        cpfOrCnpj: cpfOrCnpj
      },
    })
  }

  public async update(dto: IncreaseBalanceDto) {
    return await prisma.wallet.update({
      where: {
        cpfOrCnpj: dto.cpfOrCnpj
      },
      data: {
        balance: dto.value
      },
      select: {
        password: false,
        _count: false,
      }
    })
  }
}
