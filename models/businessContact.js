/*
Student Name: Ronald JR Ombao
ID#: 301213219
Date: October 9, 2022
*/
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