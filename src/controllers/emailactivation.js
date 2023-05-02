const Users = require('../migration-model/models/index')['tblUsers']
const verifyMail =async (req,res,next)=>{
    let id = req.params.id;
    let user =await Users.findByPk(id)
    let isUserVerify =await Users.update({btisVerify:true,dateVerifyOn:Date.now()},{where:{id:id}});
    if(isUserVerify){
        res.status(200).send({message:"Verify User"})
    }else{
        res.status(400).send({message:"Verify Failed"})
    }
}
module.exports = {
    verifyMail
}