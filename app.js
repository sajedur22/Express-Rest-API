const express=require("express");
const router = require("./src/routs/api");

const app=new express();

//security Middleware import
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
 const mongosanitize=require('express-mongo-sanitize');

 const xss=require('xss-clean');
 const hpp=require('hpp');
 const cors=require('cors');

 //security Middleware implement

 app.use(cors());
 app.use(helmet());
 app.use(mongosanitize());
 app.use(xss());
 app.use(hpp());
 //mongoose
 const mongoose= require("mongoose");

mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

//rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    Max:100 
})
app.use(limiter);




//mongodb gatabase connection

let URI="mongodb://127.0.0.1:27017/schools";
let OPTION={user:'',pass:''};
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success");
    console.log(error);
})






app.use("/api/v1",router);

//undefined route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not found"})
})
module.exports=app;