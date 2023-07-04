import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userroute.js";
import {config} from "dotenv";

config({
    path: "./config.env"
})

// connecting mongoDb (Database)
mongoose.connect(process.env.URL)
.then(() => {
    console.log("MongoDb is connected");
})
.catch((e) => {
    console.log(e);
})

const app = express();

// using middleware
app.use(express.json());
app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
    console.log("App is runing");
})