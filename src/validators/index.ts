import { NextFunction, Request, RequestHandler, Response } from "express";
import * as z from "zod";
import { logger } from "../config/logger.config.js";

export const validateRequestBody = (schema: z.ZodType): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info("Validating request body", {
        correlationId: res.locals.correlationId,
      });
      await schema.parseAsync(req.body);
      logger.info("Request body is valid");

      next();
    } catch (error) {
      logger.info("Invalid request body", {
        correlationId: res.locals.correlationId,
      });
      return res.status(400).json({
        message: "Invalid Request Body",
        error,
      });
    }
  };
};
