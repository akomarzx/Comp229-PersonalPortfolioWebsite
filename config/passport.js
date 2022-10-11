/*
Student Name : Ronald JR Ombao
ID#: 301213219
Date: October 8, 2022
*/
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
      try {
        const user = await UserModel.findOne({ username: username }).exec();
        if (user == null) {
          return done(null, false, { message: 'One of the information is invalid' });
        }
        if (await validatePassword(password, user.password)) {
          return done(null, user);
        }
        else {
          return done(null, false, { message: 'One if the information is invalid' });
        }
      } catch (error) {
        return done(error);
      }
    }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await UserModel.findOne({ id : id }).exec();
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};