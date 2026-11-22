import express from "express";
import type { Express } from "express";
import { serverConfig } from "./config";
import pingRouter from "./routes/ping.router";

const app: Express = express();

const PORT = serverConfig.PORT;
app.use(pingRouter);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
