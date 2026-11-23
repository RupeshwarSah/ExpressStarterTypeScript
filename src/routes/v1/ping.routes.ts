import express from "express";
import { pingHandler } from "../../controllers/ping.controller";
import { validateRequestBody } from "../../validators";
import { pingSchema } from "../../validators/ping.validator";

const router = express.Router();

router.get("/", validateRequestBody(pingSchema), pingHandler);

export default router;
