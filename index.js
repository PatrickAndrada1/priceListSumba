import express from "express";

const port = 3000
const app = express()

app.use(express.urlencoded({extends:true}))

app.get("/", (req,res)=>{
    res.send("Server is ready, sir")
})

app.listen(port, ()=>{
    console.log("Server is ready, sir");
})