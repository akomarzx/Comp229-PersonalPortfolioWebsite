/*
Student Name: Ronald JR Ombao
ID#: 301213219
Date: October 9, 2022
*/
let express = require('express')
let router = express.Router();
let businessContactsController = require('../controller/businessContacts.controller')
let isLoggedIn = require('../middleware/isLoggedIn')

router.get('/business-contacts-page' , isLoggedIn ,businessContactsController.getBusinessContactsPage);

router.get('/add-update', businessContactsController.getAddorUpdatePage)

router.route('/:id')
    .patch(businessContactsController.updateBusinessContact)
    .delete(businessContactsController.deleteBusinessContact)

router.route('/')
    .get(businessContactsController.getBusinessContacts)
    .post(businessContactsController.createBusinessContact)
module.exports = router;