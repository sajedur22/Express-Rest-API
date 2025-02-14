const StudentModel = require("../models/StudentModel");

/*exports.Insertstudent=async (req,res)=>{
    let reqBody=req.body;
    StudentModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{res.status(201).json({success:true,data:data})}
    })};
*/
const Insertstudent=async (req,res)=>{
    let reqBody=req.body;
try {
    const result=await studentModel.create(reqBody);
    res.status(201).json({success:true,data:data})
}catch (err){
    res.status(201).json({success:true,data:data})
}

}

