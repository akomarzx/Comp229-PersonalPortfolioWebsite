/*
Student Name : Ronald JR Ombao
ID#: 301213219
Date: October 8, 2022
*/
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');
const ApiError = require('../utils/ApiError');

const validatePassword = async (plainText, hashedPassword) => {
  try {
    return await bcrypt.compare(plainText, hashedPassword);
  } catch {
    return false;
  }
};

module.exports = async (passport) => {
  passport.use('login',new LocalStrategy(
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
    })),
  
  passport.use('register' , new LocalStrategy({
    passReqToCallback: true
  },
    async (req, username, password, done) => {    
      try {
          const result = await UserModel.findOne({$or:[{username: username}, {emailAddress: req.body.emailAddress}]}).exec();
          if(result){
              throw new ApiError('One of the information already exist in the system');
          }
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = await UserModel.create({
              username: username,
              password: hashedPassword,
              emailAddress: req.body.emailAddress
          });
          done(null, newUser);
      } catch (error) {
          console.log(error);
          done(error);
      }
  }))

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