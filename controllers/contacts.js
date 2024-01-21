const { getAllContactsModel } = require("../models/contacts");
const { getSingleContactModel } = require("../models/contacts");


async function getAllContacts(req, res) {
    const contactCollection = await getAllContactsModel();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contactCollection);
}

async function getSingleContact(req, res) {
    const singleContact = await getSingleContactModel(req.params.id);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(singleContact);
}

module.exports = { getAllContacts, getSingleContact };
