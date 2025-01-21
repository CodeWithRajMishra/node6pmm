const express= require("express");
const multer = require('multer');
const route= express.Router();
const uploadController= require("../controllers/uploadController");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Save files to uploads directory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()+file.originalname); // Keep original file name
    }
  });
 const upload = multer({ storage: storage });

route.post("/uploadfile", upload.single('photo'),  uploadController.uploadFile);

route.get("/displaydata", uploadController.dataDisplay);

module.exports=route;
