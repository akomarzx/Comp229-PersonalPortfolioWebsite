// Student Name: Ronald Jr Ombao - ID: 301213219 
// Date: September 27,2022

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejsMate = require('ejs-mate');
var indexRouter = require('../routes/index');
var authRouter = require('../routes/authRoutes');
var app = express();
let session = require('express-session');
let mongoose =require('mongoose')
let MongoStore = require('connect-mongo');
let passport = require('passport')

const store = MongoStore.create({
  mongoUrl: 'mongodb+srv://student1:redvelvet@assignment2-cluster.phqnw7l.mongodb.net/Assignment2?retryWrites=true&w=majority',
})

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET || 'this is my unsecured secret',
  cookie: {
    secure: false,
    httpOnly: true
  },
  store: store,
}));

const passportConfig = require('./passport')
passportConfig(passport);
app.use(passport.initialize())
app.use(passport.session());
// view engine setup
// ejs mate for cleaner templates
// by avoiding the includes of 
// header and footer partial in all views

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
