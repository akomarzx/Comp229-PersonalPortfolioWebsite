const mongoose = require('mongoose')

const businessContactsSchema =  mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    contactNumber : {
        type: String,
        required: String
    },
    emailAddress: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('BusinessContacts' , businessContactsSchema);