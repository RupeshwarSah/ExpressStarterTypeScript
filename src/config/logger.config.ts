import winston from "winston";
import { asyncLocalStorage } from "../utils/helpers/request.helper.js";
import DailyRotateFile from "winston-daily-rotate-file";

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

  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      dirname: "logs",
      filename: "application-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
      auditFile: "logs/.audit.json",
    }),
  ],
});
