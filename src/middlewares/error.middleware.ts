import { logger } from "@/config/jet.logger.config";
import { HttpException } from "@/utils/http.exception";
import { NextFunction, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export function ErrorMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction) {
    if (err instanceof HttpException) {
        return res.status(err.code).send(err)
    }
    logger.err(err)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR)
}