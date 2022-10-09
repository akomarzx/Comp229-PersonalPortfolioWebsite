const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');

const validatePassword = async (plainText, hashedPassword) => {
  try {
    return await bcrypt.compare(plainText, hashedPassword);
  } catch {
    return false;
  }
};

module.exports = async (passport) => {
  passport.use(new LocalStrategy(
  async (username, password, done) => {

  }));

  passport.serializeUser(function(user, done) {
    
  });

  passport.deserializeUser(async (empId, done) => {
 
  });
};