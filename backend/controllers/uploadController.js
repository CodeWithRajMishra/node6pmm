const StuModel= require("../models/studentModel");



const uploadFile=async(req, res)=>{
    const {rollno, name, city} = req.body;
    const imgname =req.file.filename;
    const Data= await StuModel.create(
        {
            rollno:rollno,
            name:name,
            city:city,
            imgname:imgname
        }
    )

      res.send("OK");
}


const dataDisplay=async(req, res)=>{
    const Data= await StuModel.find();
    console.log("OKKK");
    res.send(Data);

}
module.exports= {
    uploadFile,
    dataDisplay
}