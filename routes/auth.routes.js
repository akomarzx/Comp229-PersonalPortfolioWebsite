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

const redirectIfLoggedin = (req, res, next) => {
    if(req.isAuthenticated()){
        return res.redirect('/business-contacts/business-contacts-page')
    }
    else{
        next();
    }
}

router.route('/login')
    .get(redirectIfLoggedin, authController.getLoginPage)
    .post(passport.authenticate('local', {
        successRedirect: '/business-contacts/business-contacts-page',
        failureRedirect: '/auth/login',
        failureFlash: 'Invalid credential. Please try again'
    }))

router.post('/sign-out', authController.signOut);

module.exports = router;