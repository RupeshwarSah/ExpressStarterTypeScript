import express from "express";
import type { Express } from "express";
import { serverConfig } from "./config";
import v1Router from "./routes/v1/index.routes";

const app: Express = express();
app.use(express.json());

const PORT = serverConfig.PORT;
app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
