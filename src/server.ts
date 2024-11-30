import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express, { Request, Response, Application } from "express";
import UserRouter from "./routes/UserRoute";

dotenv.config();
const MONGO_PWD = process.env.MONGO_PWD!;

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", UserRouter);
mongoose
    .connect(
        `mongodb+srv://dbtest:${MONGO_PWD}@dbaldifahluzimuharambet.ypowz.mongodb.net/?retryWrites=true&w=majority&appName=DBAldiFahluziMuharamBETEST`
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.log("Error connect to MongoDB");
        console.error(err);
    });

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Express & TypeScript Server");
});

app.listen(Number(port), () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});

export default app;
