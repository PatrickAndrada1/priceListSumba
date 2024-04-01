import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import CategoryVendor from "./models/categoryVendor.js";
import CategoryItem from "./models/categoryItem.js";
import router from "./routers/index.js"
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URI;

app.use("/", router)

app.get("/", (req, res) => {
  res.send("Welcome to Price List Sumba Server");
});

app.post("/addItemCategory", async (req, res) => {
  try {
    const itemCategory = req.body;
    const newItemCategory = await CategoryItem.create(itemCategory);
    res.status(201).json(newItemCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/itemCategories", async (req, res) => {
  try {
    const data = await CategoryItem.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use(errorHandler)
// connect to DB

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
