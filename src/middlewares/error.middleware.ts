import { NextFunction, Request, Response } from "express";

export const genericErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  res.status(500).json({
    success: "false",
    error: `${err.message} ${err.name}`,
  });
};
