
const mongoose= require("mongoose");
const studentSchema= new mongoose.Schema({
     rollno:Number,
     name:String,
     city:String,
     imgname:String
})

module.exports = mongoose.model("student", studentSchema);