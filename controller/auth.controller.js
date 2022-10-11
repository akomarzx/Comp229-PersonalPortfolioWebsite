/*
    Student Name: Ronald JR Ombao
    ID#: 301213219
    Date: October 9, 2022
*/
let authServices = require('../services/auth.services');

let getSignupPage = (req, res) => {
    res.locals.title = 'Register'
    res.status(200).render('./authViews/signUpView');
}

let createUser = async (req, res, next) => {
    try {
        const { username, password, emailAddress } = req.body;
        await authServices.registerUser(username, password, emailAddress);
        req.flash('success', 'Succesfully registered')
        res.status(201).redirect('/auth/login');
    } catch (error) {
        next(error);
    }
}

let getLoginPage = async (req, res) => {
    res.locals.title = 'Log-in';
    res.status(200).render('./authViews/logInView');
}

let signOut = (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    });
};

module.exports = {
    getSignupPage,
    createUser,
    getLoginPage,
    signOut
}