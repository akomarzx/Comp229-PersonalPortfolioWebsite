/*
    Student Name: Ronald JR Ombao
    ID#: 301213219
    Date: October 9, 2022
*/
let express = require('express');
let router = express.Router();

let authController = require('../controller/authController');

router.route('/register')
    .get(authController.getSignupPage)
    .post(authController.createUser);

module.exports = router;