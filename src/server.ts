import express from "express";
import type { Express } from "express";

const app: Express = express();

const PORT = 8000;

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
