const { log } = require("console");
const express = require("express");
const app = express()
const multer = require("multer")

let upload = multer({
    dest:"images"
})

app.post("/",upload.single("img"),(req,res)=>{
    res.send("upload images")
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.listen(8000,()=>{
    console.log("listining port 8000");
})