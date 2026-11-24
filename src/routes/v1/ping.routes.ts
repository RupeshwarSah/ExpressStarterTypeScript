import express from "express";
import { pingHandler } from "../../controllers/ping.controller.js";
import { validateRequestBody } from "../../validators/index.js";
import { pingSchema } from "../../validators/ping.validator.js";

const router = express.Router();

router.get("/", validateRequestBody(pingSchema), pingHandler);

export default router;
