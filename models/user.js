/*
Student Name: Ronald JR Ombao
ID#: 301213219
Date: October 9, 2022
*/
let mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Users', userSchema);