import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import User from "./models/user.js";
import CategoryVendor from "./models/categoryVendor.js";
import CategoryItem from "./models/categoryItem.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
const port = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("Welcome to Price List Sumba Server");
});

app.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const newUser = await User.create(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/login", async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

app.post("/addVendorCategory", async (req, res) => {
  try {
    const vendorCategory = req.body;
    const newVendorCategory = await CategoryVendor.create(vendorCategory);
    res.status(201).json(newVendorCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/vendorCategories", async (req, res) => {
  try {
    const data = await CategoryVendor.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
