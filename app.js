import express from "express";
import {MongoClient, ServerApiVersion} from "mongodb"
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
// console.log(mongoURI);

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Welcome to Price List Sumba Server");
});

app.use(errorHandler);

// Connect to DB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log(mongoURI)
    console.log("App is connected to DB");
    app.listen(port, () => {
      console.log(`App is connected to port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(mongoURI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
