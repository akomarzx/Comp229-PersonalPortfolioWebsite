/*
Student Name: Ronald JR Ombao
ID#: 301213219
Date: October 9, 2022
*/

let businessContactModel = require('../models/businessContact')
let getBusinessContactsPage = async (req, res) => {
    res.locals.title = 'Business Contacts Page'
    const contacts = await businessContactModel.find();
    res.locals.contacts = contacts;
    res.status(200).render('./businessContactsView/businessContactsView');
}

let getAddorUpdatePage = async (req, res, next) => {
    try {
        if (req.query.mode && req.query.id) {
            let currentContact = await businessContactModel.findById(req.query.id);
            res.locals.currentContact = currentContact
            res.locals.title = 'Update Contact';
            res.locals.action = `/business-contacts/${currentContact.id}?_method=PATCH`;
        } else {
            res.locals.title = 'Add New Contact';
            res.locals.action = '/business-contacts';
        }
        res.status(200).render('./businessContactsView/addOrUpdateView');
    } catch (error) {
        next(error)
    }
}

let getBusinessContact = async (req, res) => {
    console.log()
}

let updateBusinessContact = async (req, res, next) => {
    try {
        await businessContactModel.updateOne({ id: req.body.id }, {
            contactName: req.body.contactName,
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
        await businessContactModel.deleteOne({id: req.params.id});
        req.flash('success' , 'Deleted Sucessfully');
        res.redirect('/business-contacts/business-contacts-page'); 
    } catch (error) {
        next(error)
    }
}

let getBusinessContacts = async (req, res) => {

}

let createBusinessContact = async (req, res, next) => {
    try {
        const { contactName, contactNumber, emailAddress } = req.body;
        await businessContactModel.create({ contactName: contactName, contactNumber: contactNumber, emailAddress: emailAddress })
        req.flash('success', 'Contact Succesfully Added');
        res.redirect('/business-contacts/business-contacts-page');
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getBusinessContactsPage,
    getAddorUpdatePage,
    getBusinessContact,
    updateBusinessContact,
    deleteBusinessContact,
    getBusinessContacts,
    createBusinessContact
}