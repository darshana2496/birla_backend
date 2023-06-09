const express = require('express');
const { createUserbyAdmin, getAllUsers, updateUserbyId, deleteUserbyId } = require('../controllers/user_creator_controller');
const route = express.Router();

route.post('/create/user',createUserbyAdmin);
route.get('/get/all/users',getAllUsers);
route.put('/update/user::id',updateUserbyId);
route.delete('/delete/user::id',deleteUserbyId)
route.post('/mail/activation::token',)

module.exports = route