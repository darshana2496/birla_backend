const express = require('express');
const { createUserbyAdmin } = require('../controllers/user_creator_controller');
const route = express.Router();

route.post('/birla/create/user',createUserbyAdmin)

module.exports = route