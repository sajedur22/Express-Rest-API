const app=require("./app");

//Config file import
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});


app.listen(process.env.RUNNINING_PORT,function(){
    console.log("succes"+process.env.RUNNINING_PORT);
})