import { NextFunction, Request, Response } from "express";
import { generateRandomId } from "../utils/id.js";
import { asyncLocalStorage } from "../utils/helpers/request.helper.js";

export const attachCorrelationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const correlationId = generateRandomId();
  //   res.locals.correlationId = correlationId;

  asyncLocalStorage.run({ correlationId }, () => {
    next();
  });

  next();
};
