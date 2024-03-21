import express from "express";
import mongoose from "mongoose";
import {port, mongoURI} from "./config.js";
import CategoryVendor from "./models/categoryVendor.js";
import CategoryItem from "./models/categoryItem.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extends:true}))

app.get("/", (req,res)=>{
    res.send("Welcome to Price List Sumba Server")
})

app.post("/addVendorCategory", async(req,res)=>{
    try {
        const vendorCategory = req.body
        const newVendorCategory = await CategoryVendor.create(vendorCategory)
        res.status(201).json(newVendorCategory)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get("/vendorCategories", async(req,res)=>{
    try {
        const data = await CategoryVendor.find({})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.post("/addItemCategory", async(req,res)=>{
    try {
        const itemCategory = req.body
        const newItemCategory = await CategoryItem.create(itemCategory)
        res.status(201).json(newItemCategory)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get("/itemCategories", async(req,res)=>{
    try {
        const data = await CategoryItem.find({})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// connect to DB

mongoose.connect(mongoURI).then(()=>{
    console.log("App is connected to DB");
    app.listen(port, ()=>{
        console.log("Server is ready, sir");
    })
}).catch((err)=>{
    console.log(err);
})