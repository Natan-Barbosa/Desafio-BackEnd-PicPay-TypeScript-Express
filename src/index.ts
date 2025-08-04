import { Application, Request, Response } from "express";
import express from "express";
import morgan from "morgan";
import { logger } from "./config/jet.logger.config";
import * as dotenv from "dotenv";
import { enviroment } from "./constants/enviroment";
import bodyParser from "body-parser";
import { WalletRoutes } from "./routes/wallet.routes";
import { ErrorMiddleware } from "./middlewares/error.middleware";
import { TransactionRoutes } from "./routes/transaction.routes";

dotenv.config();
const envConfig = process.env.NODE_ENV || enviroment.dev;

const app: Application = express();
const port = 3000;
app.use(bodyParser.json());

if (envConfig == enviroment.dev) {
  app.use(morgan("common"));
}

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World");
});
app.use(WalletRoutes);
app.use(TransactionRoutes)

app.use(ErrorMiddleware)
app.listen(port, () => {
  if (envConfig == enviroment.dev) {
    logger.imp(`Server Is Runing In Dev Mode On Port: ${port}`);
  } else {
    logger.imp(`Server Is Runing In Production Mode On Port: ${port}`);
  }
});
