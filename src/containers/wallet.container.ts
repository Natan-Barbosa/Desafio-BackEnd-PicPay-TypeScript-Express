import "reflect-metadata";
import { container } from "tsyringe";
import { WalletController } from "@/controllers/wallet.controller";
import { WalletRepository } from "@/repository/wallet.repository";
import { WalletService } from "@/services/wallet.service";

container.register<WalletRepository>("WalletRepository", WalletRepository);
container.register<WalletService>("WalletService", WalletService);
const Controller = container.resolve(WalletController);

export { Controller };
