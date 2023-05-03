const express = require('express');
const { verifyMail } = require('../controllers/emailactivation');
const route = express.Router();

route.get('/verify/users/mail::id',verifyMail);

module.exports = route