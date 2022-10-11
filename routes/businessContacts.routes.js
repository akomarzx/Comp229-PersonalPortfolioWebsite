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