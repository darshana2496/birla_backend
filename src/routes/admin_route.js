const express = require('express');
const router = express.Router()

const { getAllUsers, createUser, updateUser, getUserById, deleteUserById } = require('../controllers/admin_controller')


router.get('/getAdminList', getAllUsers);
router.post('/createAdmin', createUser);
router.post('/updateAdmin', updateUser);
router.get('/getAdminById/:id', getUserById);
router.get('/deleteAdminById/:id', deleteUserById);

module.exports = router