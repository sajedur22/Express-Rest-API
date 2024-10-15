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

//rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    Max:100 
})
app.use(limiter);



app.use("/api/v1",router);

//undefined route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not found"})
})
module.exports=app;