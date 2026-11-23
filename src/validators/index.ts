import { NextFunction, Request, RequestHandler, Response } from "express";
import * as z from "zod";

export const validateRequestBody = (schema: z.ZodType): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log("Request body is valid");
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Invalid Request Body",
        error,
      });
    }
  };
};
