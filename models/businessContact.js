const mongoose = require('mongoose')

const businessContactsSchema =  mongoose.Schema({
    contactName: {
        type: String,
        required: true
    },
    contactNumber : {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('BusinessContacts' , businessContactsSchema);