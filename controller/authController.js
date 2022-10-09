/*
    Student Name: Ronald JR Ombao
    ID#: 301213219
    Date: October 9, 2022
*/

let getSignupPage = (req, res) => {
    res.status(200).render('./authViews/signUpView');
}

module.exports = {
    getSignupPage,
}