const express=require("express");
const HelloController=require("../controller/HelloController");
const router=express.Router();


//this is my first routting
router.get("/hello",HelloController.hello);

module.exports=router;