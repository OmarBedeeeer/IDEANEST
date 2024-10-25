import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { AppError } from "./utils/errorhandler";

const app: Application = express();

dotenv.config();

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    res.status(404).send("Can't find this Page");
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return res.status(error.status).json({
        message: error.message,
      });
    } else {
      const message =
        process.env.ENV === "Production"
          ? "Internal Server Error"
          : error.message;
  
      console.error({ message: error.message, stack: error.stack, error });
      return res.status(500).json({
        message,
      });
    }
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App listening on port`);
  });
  