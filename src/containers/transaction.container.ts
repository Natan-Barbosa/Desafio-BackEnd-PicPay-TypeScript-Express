import { TransactionController } from "@/controllers/transaction.controller"
import { TransactionRepository } from "@/repository/transaction.repository"
import { WalletRepository } from "@/repository/wallet.repository"
import { TransactionService } from "@/services/transaction.service"
import "reflect-metadata"
import { container } from "tsyringe"


container.register<TransactionRepository>("TransactionRepository", TransactionRepository)
container.register<WalletRepository>("WalletRepository", WalletRepository)
container.register<TransactionService>("TransactionService", TransactionService)
const controller = container.resolve<TransactionController>(TransactionController);

export { controller }