let mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Users', userSchema);