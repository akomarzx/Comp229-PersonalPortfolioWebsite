/*
Student Name: Ronald JR Ombao
ID#: 301213219
Date: October 9, 2022
*/

let businessContactModel = require('../models/businessContact')

let getBusinessContactsPage = async (req, res) => {
    res.locals.title = 'Business Contacts Page'
    const contacts = await businessContactModel.find().sort({firstName : 1});
    res.locals.contacts = contacts;
    res.status(200).render('./businessContactsView/businessContactsView');
}

let getAddorUpdatePage = async (req, res, next) => {
    try {
        // For some reason code formatter will put 
        // a white space in string in ejs
        // which will break the application
        res.locals.undef = "undefined"
        if (req.query.mode && req.query.id) {
            let currentContact = await businessContactModel.findById(req.query.id);
            res.locals.currentContact = currentContact
            res.locals.title = 'Update Contact';
            res.locals.isEdit = true;
            res.locals.action = `/business-contacts/${currentContact.id}?_method=PATCH`;
            res.locals.deleteAction = `/business-contacts/${currentContact.id}?_method=DELETE`
        } else {
            res.locals.isEdit = false;
            res.locals.title = 'Add New Contact';
            res.locals.action = '/business-contacts';
        }
        res.status(200).render('./businessContactsView/addOrUpdateView');
    } catch (error) {
        next(error)
    }
}


let updateBusinessContact = async (req, res, next) => {
    try {
        await businessContactModel.updateOne({ _id: req.body.id }, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            contactNumber: req.body.contactNumber,
            emailAddress: req.body.emailAddress
        })
        req.flash('sucess', 'Updated Succesfully')
        res.redirect('/business-contacts/business-contacts-page');
    } catch (error) {
        next(error)
    }

}

let deleteBusinessContact = async (req, res, next) => {
    try {
        await businessContactModel.deleteOne({_id: req.params.id});
        req.flash('success' , 'Deleted Sucessfully');
        res.redirect('/business-contacts/business-contacts-page'); 
    } catch (error) {
        next(error)
    }
}


let createBusinessContact = async (req, res, next) => {
    try {
        const { firstName, lastName, contactNumber, emailAddress } = req.body;
        
        await businessContactModel.create({ 
            firstName: firstName, 
            lastName: lastName, 
            contactNumber: contactNumber,
            emailAddress: emailAddress 
        })
        req.flash('success', 'Contact Succesfully Added');
        res.redirect('/business-contacts/business-contacts-page');
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getBusinessContactsPage,
    getAddorUpdatePage,
    updateBusinessContact,
    deleteBusinessContact,
    createBusinessContact
}