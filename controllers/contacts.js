const {
    getAllContactsModel,
    getSingleContactModel,
    updateSingleContactModel,
    setSingleContactModel,
    deleteSingleContactModel
} = require("../models/contacts");



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

// post logic
async function updateSingleContact(req, res) {
    const payload = req.body;
    const response = await updateSingleContactModel(req.params.id, payload); //just getting the id and the whole body of the request
    res.setHeader('Content-Type', 'application/json');
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
}

// put logic
async function setSingleContact(req, res) {
    const payload = req.body;
    const response = await setSingleContactModel(payload);
    res.setHeader('Content-Type', 'application/json');
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        console.log(response)
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
}

// delete logic
async function deleteSingleContact(req, res) {
    const singleContact = await deleteSingleContactModel(req.params.id);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(singleContact);
}

module.exports = { getAllContacts, getSingleContact, updateSingleContact, setSingleContact, deleteSingleContact };
