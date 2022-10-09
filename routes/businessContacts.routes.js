let express = require('express')
let router = express.Router();
let businessContactsController = require('../controller/businessContacts.controller')
let isLoggedIn = require('../middleware/isLoggedIn')

router.get('/' , isLoggedIn ,businessContactsController.getBusinessContactsPage);

module.exports = router;