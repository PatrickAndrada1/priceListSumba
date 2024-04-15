import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import router from "./routers/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URI;

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Welcome to Price List Sumba Server");
});

app.use(errorHandler);

// Connect to DB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("App is connected to DB");
    app.listen(port, () => {
      console.log(`App is connected to port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
