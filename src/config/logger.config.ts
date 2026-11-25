import winston from "winston";
import { asyncLocalStorage } from "../utils/helpers/request.helper.js";

export const logger = winston.createLogger({
  level: "info",

  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),

    winston.format.printf(({ timestamp, level, message, ...data }) => {
      const correlationId = asyncLocalStorage.getStore()?.correlationId;

      return JSON.stringify({
        timestamp,
        level,
        message,
        ...(correlationId && { correlationId }),
        data,
      });
    }),
  ),

  transports: [new winston.transports.Console()],
});
