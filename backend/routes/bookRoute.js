const express= require("express");
const route= express.Router();
const bookController= require("../controllers/bookController");

route.post("/datasave", bookController.bookSave);
route.get("/datadisplay", bookController.bookDisplay);
route.post("/datadelete", bookController.bookDelete);
route.post("/editdatadisplay", bookController.editbookDisplay);
route.post("/editdatasave", bookController.editbookSave);
route.post("/datasearch", bookController.editbookSearch);






module.exports = route;
