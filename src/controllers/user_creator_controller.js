const nodemailer = require("nodemailer");
const Mailgen = require('mailgen');
// const { tblUsers } = require('../migration-model/models')
const tblUsers = require('../migration-model/models/index')['tblUsers']
const createUserbyAdmin =async(req,res,next)=>{
    let reqbody = req.body;
    console.log(reqbody);
    let user = {
        vcName:reqbody.name,
        vcEmail:reqbody.email,
        vcUsername:reqbody.username,
        vcLocation:reqbody.location,
        ntaddress:reqbody.address,
        nmContact:reqbody.contact,
        btisVerify:false,
        btisActive:false,
        vcparentName:reqbody.parentname,
        vcuserType:reqbody.usertype
    } 
    try{
        let createUser = await tblUsers.create(user);
        console.log(createUser,'21');
        if(createUser){
            res.status(201).send({message:"Created User Succesfully",success:true,status:"Activation mail send to user"})
        }
    }
    catch(e){
        console.log(e);
        res.status(400).send({message:"Error in creating user",success:false,error:e})
    }

}
const updateUserbyId = (req,res,next) =>{

}
const getAllUsers=(req,res,next)=>{

} 
const deleteUserbyId = (req,res,next)=>{

}
module.exports = {
    createUserbyAdmin,
    updateUserbyId,
    getAllUsers,
    deleteUserbyId
}