
let getBusinessContactsPage = async(req, res) => {
    res.locals.title = 'Business Contacts Page'
    res.status(200).render('./businessContactsView/businessContactsView');
}


module.exports = {
    getBusinessContactsPage
}