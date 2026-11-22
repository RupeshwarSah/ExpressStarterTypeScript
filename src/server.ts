import express from "express";
import type { Express } from "express";
import { serverConfig } from "./config";
import { pingHandler } from "./controllers/ping.controller";

const app: Express = express();

const PORT = serverConfig.PORT;

app.get("/ping", pingHandler);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
