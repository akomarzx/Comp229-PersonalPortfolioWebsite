/*
    Student Name: Ronald JR Ombao
    ID#: 301213219
    Date: October 9, 2022
*/
let express = require('express');
let router = express.Router();
let passport = require('passport')
let authController = require('../controller/auth.controller');

router.route('/register')
    .get(authController.getSignupPage)
    .post(authController.createUser);

router.route('/login')
    .get(authController.getLoginPage)
    .post(passport.authenticate('local', {
        successRedirect: '/business-contacts',
        failureRedirect: '/auth/login',
        failureFlash: 'Invalid credential. Please try again'
    }))

router.post('/sign-out', authController.signOut);

module.exports = router;