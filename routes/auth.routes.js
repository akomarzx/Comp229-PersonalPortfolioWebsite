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
    .post(passport.authenticate('register', {
        successRedirect : '/auth/login',
        failureRedirect: '/auth/register',
        successFlash: 'Succesfully Registered',
        failureFlash: 'One of the information already exist'
    }));

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
    .post(authController.logIn)

router.post('/sign-out', authController.signOut);

module.exports = router;