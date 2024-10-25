import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

const app: Application = express();
dotenv.config();
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("<h1>Hello World</h1>");
})
const port = process.env.PORT;

dotenv.config();

app.listen(port, () => {
    console.log(`App listening on port`);
  });
  