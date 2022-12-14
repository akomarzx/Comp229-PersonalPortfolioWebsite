// Student Name: Ronald Jr Ombao - ID: 301213219 
// Date: September 27,2022
var express = require('express');
var router = express.Router();
let UserModel = require('../models/user');
let isLoggedIn= require('../middleware/isLoggedIn')
var indexController = require('../controller/index.controller');

router.get('/', indexController.getHomepage);

router.get('/about-me', indexController.getAboutMePage)

router.get('/projects', indexController.getProjectsPage)

router.get('/services', indexController.getServicesPage)

router.get('/contact-me', indexController.getContactMePage)


module.exports = router;
