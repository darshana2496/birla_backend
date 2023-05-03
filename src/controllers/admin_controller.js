
const {tblAdmin} = require('../migration-model/models');

const getAllUsers = async (req, res,next) => {
    try {
        const users = await tblAdmin.findAll();

        if(users){
            res.status(200).send({message:"",success:true,status:"Success",data:users})
        }

      } 
      catch(e) {
        // next(apiError.NotFound("Can't found anything on server",e))
        console.log(e);
      }

}

const createUser = async (req, res,next) => {
    try {
        const user = await tblAdmin.create({
            vcName: req.body.name,
            vcEmail: req.body.email,
            numContact: req.body.contact,
            btIsActive: false,
            btIsVerified: false,
            vcCompanyName: req.body.companyName,
            dtVerifiedAt: new Date(),
            vcCompanyLocation: req.body.companyLocation,
            vcUsername: req.body.email,
        })
        if(user){
            res.status(200).send({message:"User created succesfully",success:true,status:"Success", data: user})
        }
        // console.log(user);
    } catch (e) {
        // next(apiError.BadRequest("Can't create customer",e))
        console.log(e)
    }
}

const updateUser = async (req, res,next) => {
    let id = req.body.id;

    try {
        const user = await tblAdmin.update({
            id: id,
            vcName: req.body.name,
            vcEmail: req.body.email,
            numContact: req.body.contact,
            btIsActive: false,
            btIsVerified: false,
            vcCompanyName: req.body.companyName,
            dtVerifiedAt: new Date(),
            vcCompanyLocation: req.body.companyLocation,
            vcUsername: req.body.email,
        }, {
            where: {
               id: id 
            }
        })
        if(user){
            res.status(200).send({message:"Admin updated succesfully",success:true,status:"Success"})
        }
        
    } catch (e) {
        console.log(e)
        // next(apiError.BadRequest("Can't update customer",e))
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await tblAdmin.findAll({
            where: {
                id : req.params.id
            }
        })

        res.json(user);
    } catch (e) {
        console.log(e);
    }
}

const deleteUserById = async (req, res,next) => {
    let id = req.params.id
    try {
        const isUserdeleted = await tblAdmin.destroy({
            where: {
                id: id
            }
        })
    
        if(isUserdeleted == 1){
            res.status(200).send({message:"User deleted succesfully",success:true,status:"Success"})
        }

    } catch(e) {
       console.log(e)
    }
}

module.exports = { getAllUsers, createUser, updateUser, getUserById, deleteUserById }