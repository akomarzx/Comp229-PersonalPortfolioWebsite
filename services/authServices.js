/*
    Student Name: Ronald JR Ombao
    ID#: 301213219
    Date: October 9, 2022
*/
const bcrypt = require('bcrypt');
const UserModel = require('../models/user')
const registerUser = async (username, password, emailAddress) => {
    
    try {
        const result = await UserModel.findOne({username: username , emailAddress: emailAddress}).exec();
        if(result){
            throw new Error('One of the information already exist in the system');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({
            username: username,
            password: hashedPassword,
            emailAddress: emailAddress
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
  registerUser,
};
