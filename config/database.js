/*
    Student Name : Ronald JR Ombao
    ID#: 301213219
    Date: October 8, 2022
*/
const mongoose = require('mongoose');

let connectionURI = 'mongodb+srv://student1:redvelvet@assignment2-cluster.phqnw7l.mongodb.net/Assignment2?retryWrites=true&w=majority';

module.exports = async () => {
    try{
        await mongoose.connect(connectionURI);
        console.log('Connected!');
    }catch(error){
        console.log(error);
    }
}