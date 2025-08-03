import { ClassConstructor, plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export async function ValidationMiddleware<T extends object>(
  dtoClass: ClassConstructor<T>,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const dto = plainToClass(dtoClass, req.body);
  const errors = await validate(dto, { validationError: { target: false } });
  if (errors.length > 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }

  req.body = dto; // Substitui o body pela instância do DTO
  next();
}
