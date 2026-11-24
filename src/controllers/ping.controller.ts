import type { NextFunction, Request, Response } from "express";
import fs from "node:fs/promises";
import { NotFoundError } from "../utils/errors/app.error.js";

export const pingHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // res.send("pong");
    await fs.readFile("sample");
  } catch (error) {
    throw new NotFoundError("File");
  }
};
