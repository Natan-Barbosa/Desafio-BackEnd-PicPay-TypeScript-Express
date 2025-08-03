import { WalletCreateDto } from "@/dto/wallet/wallet.create.dto";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import express, { NextFunction, Request, Response } from "express";
import { Controller as WalletController } from "@/containers/wallet.container";
import { IncreaseBalanceDto } from "@/dto/wallet/wallet.increase.dto";

const router = express.Router();

router.post(
  "/wallet",
  (req: Request, res: Response, next: NextFunction) => ValidationMiddleware(WalletCreateDto, req, res, next),
  (req: Request, res: Response) => WalletController.create(req, res)
);

router.post(
  "/increase",
  (req: Request, res: Response, next: NextFunction) => ValidationMiddleware(IncreaseBalanceDto, req, res, next),
  (req: Request, res: Response) => WalletController.IncreaseBalance(req, res))

export { router as WalletRoutes };
