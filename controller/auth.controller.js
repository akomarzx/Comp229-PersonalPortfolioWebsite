/*
    Student Name: Ronald JR Ombao
    ID#: 301213219
    Date: October 9, 2022
*/

let getSignupPage = (req, res) => {
    res.locals.title = 'Register'
    res.status(200).render('./authViews/signUpView');
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
    getLoginPage,
    signOut
}