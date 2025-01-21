const express= require("express");
const app= express();
const cors= require("cors");
const multer = require('multer');
const mongoose=require("mongoose");
const bodyparser = require('body-parser');
const multerRoute= require("./routes/uploadmulterRoute");

mongoose.connect("mongodb://127.0.0.1:27017/pm6multerupload").then(()=>{
    console.log("DB connected!");
})
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/multerexample", multerRoute);





app.listen(8000, ()=>{
    console.log("Server run on 8000 port!");
})