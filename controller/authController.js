/*
    Student Name: Ronald JR Ombao
    ID#: 301213219
    Date: October 9, 2022
*/
let authServices = require('../services/authServices');

let getSignupPage = (req, res) => {
    res.locals.title =  'Register'
    res.status(200).render('./authViews/signUpView');
}

let createUser = async (req, res, next) => {
    try {
        const {username ,password ,emailAddress} = req.body;
        await authServices.registerUser(username , password , emailAddress);
        res.status(201).redirect('/');
    } catch (error) {
        next(error);
    }
}
module.exports = {
    getSignupPage,
    createUser,
}