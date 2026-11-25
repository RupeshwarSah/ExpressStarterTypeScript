import type { NextFunction, Request, Response } from "express";
// import fs from "node:fs/promises";
import { NotFoundError } from "../utils/errors/app.error.js";
import { logger } from "../config/logger.config.js";
import { success } from "zod";

export const pingHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      success: true,
      message: "pong",
    });
    logger.info("Response sent", {
      correlationId: res.locals.correlationId,
    });
    // await fs.readFile("sample");
  } catch (error) {
    throw new NotFoundError("File");
  }
};
