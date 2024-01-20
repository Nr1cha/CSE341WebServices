const { getAllContactsModel } = require("../models/contacts");
async function getAllContacts(req, res) {
    const contactCollection = await getAllContactsModel();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contactCollection);
}

module.exports = { getAllContacts };
