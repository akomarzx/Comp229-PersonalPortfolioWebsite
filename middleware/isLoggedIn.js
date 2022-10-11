/*
Student Name: Ronald JR Ombao
ID#: 301213219
Date: October 9, 2022
*/
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    // req.flash('error', 'Please Log-in first');
    return res.redirect('/auth/login');
  };
  
  module.exports = isLoggedIn;