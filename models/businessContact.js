/*
Student Name: Ronald JR Ombao
ID#: 301213219
Date: October 9, 2022
*/
const mongoose = require('mongoose')

const businessContactsSchema =  mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    contactNumber : {
        type: String,
        required: true,
        trim: true
    },
    emailAddress: {
        type: String,
        required: true,
        trim: true
    }
})

businessContactsSchema.virtual('contactName')
    .get(function() {
        return `${this.firstName} ${this.lastName}`;
    })


module.exports = mongoose.model('BusinessContacts' , businessContactsSchema);