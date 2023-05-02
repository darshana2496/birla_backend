const nodemailer = require("nodemailer");
const Mailgen = require('mailgen');
const apiError = require("../errors/apiErrorClass");
const getAllRecord = require("../commonDBmethods/getAllRecord");
const { where } = require("sequelize");
const deleteRecordById = require("../commonDBmethods/deleteRecordbyId");
// const { tblUsers } = require('../migration-model/models')
const tblUsers = require('../migration-model/models/index')['tblUsers']
const createUserbyAdmin =async(req,res,next)=>{
    let reqbody = req.body;
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
        if(createUser){
            let config ={
                service:'gmail',
                auth:{
                    user:'tpsmubashir@gmail.com',
                    pass:'prfvbhbobomzlztc'
                }
            }
            var email = {
                body: {
                    name: reqbody.name,
                    intro: 'Welcome to Birla! We\'re very excited to have you on board.',
                    action: {
                        instructions: 'To get started with app, please click here:',
                        button: {
                            color: '#22BCC6', // Optional action button color
                            text: 'Confirm your account',
                            link: `http://localhost:8000/myapi/v1/birla/verify/users/mail:${createUser.id}`
                        }
                    },
                    outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
                }
            };
            let transporter = nodemailer.createTransport(config);
            console.log('46');
            let mailGenerator = new Mailgen({theme:"default",product:{
                name:'Mubashir',link:'https://mailgen.js/'
            }});
            let mail =mailGenerator.generate(email);
            let message = {
                from:'tpsmubashir@gmail.com',
                to:reqbody.email,
                subject:"User Created",
                html:mail
            }
            transporter.sendMail(message).then(()=>{
            console.log(config,'tab data check');
                console.log('Mail send Succfully 58');
            }).catch((err)=>{
                console.log(err,'60');
            })
            res.status(201).send({message:"Created User Succesfully",success:true,status:"Activation mail send to user"})
        }
    }
    catch(e){
        console.log(e);
        next(apiError.BadRequest("Error in creating user",e));
        // res.status(400).send({message:"Error in creating user",success:false,error:e})
    }

}
const updateUserbyId =async (req,res,next) =>{

    let reqbody = req.body;
    let id = req.params.id;
    console.log(reqbody,id);
    let userData = {
        vcName:reqbody.name,
        vcEmail:reqbody.email,
        vcUsername:reqbody.username,
        vcLocation:reqbody.location,
        ntaddress:reqbody.address,
        nmContact:reqbody.contact,
        btisVerify:reqbody.verify,
        btisActive:reqbody.active,
        vcparentName:reqbody.parentname,
        vcuserType:reqbody.usertype
    }
    console.log(userData);
      tblUsers.update(userData,{where:{id:id}}).then((data)=>{
        console.log(data);
        res.status(200).send({message:"Users Update Succesfully",success:true,status:"Success"})
     }).catch((err)=>{
        next(apiError.BadRequest("Can't Update Users/Sale",updateUser))
        console.log(err);
     })

    //  if(updateUser[0] == 1){
        
    //  }
    //  else{
        
    //  }
}
const getAllUsers=async(req,res,next)=>{
    let users = await getAllRecord(tblUsers);
    // console.log(users,users instanceof Error);
    if(users && users instanceof Error){
        next(apiError.NotFound("Can't find Users/Sale",users))
    }
    else{
        res.status(200).send({message:'Find all user',data:users,success:true,status:'Success'})
    }
} 
const deleteUserbyId = async(req,res,next)=>{
    console.log(req.params.id);
    let checkDelete =await deleteRecordById(req.params.id,tblUsers);
    console.log(checkDelete,'123');
    if(checkDelete){
        res.status(200).send({message:'User Deleted Succesfully',success:true,status:'Success'})
    }
    else{
        next(apiError.NotFound("Can't User with id",checkDelete))
    }
}
module.exports = {
    createUserbyAdmin,
    updateUserbyId,
    getAllUsers,
    deleteUserbyId
}