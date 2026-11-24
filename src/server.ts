import express from "express";
import type { Express } from "express";
import { serverConfig } from "./config/index.js";
import v1Router from "./routes/v1/index.routes.js";
import { genericErrorHandler } from "./middlewares/error.middleware.js";

const app: Express = express();
app.use(express.json());

const PORT = serverConfig.PORT;
app.use("/api/v1", v1Router);

app.use(genericErrorHandler);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
