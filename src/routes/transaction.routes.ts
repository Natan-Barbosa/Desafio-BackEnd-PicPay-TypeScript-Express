import { TransactionDto } from "@/dto/transaction/transaction.dto";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import express, { NextFunction, Request, Response } from "express"
import { controller as TransactionController } from "@/containers/transaction.container";


const router = express.Router();

router.post(
    "/transaction",
    (req: Request, res: Response, next: NextFunction) => ValidationMiddleware(TransactionDto, req, res, next),
    (req: Request, res: Response) => TransactionController.create(req, res))


export { router as TransactionRoutes }