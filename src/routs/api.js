const express=require("express");
const HelloController=require("../controller/HelloController");
const StudentController=require("../controller/StudentController");

const router=express.Router();


//this is my first routting
router.get("/hello",HelloController.hello);

//mongoose
router.post("/Insertstudent",StudentController.Insertstudent);

module.exports=router;