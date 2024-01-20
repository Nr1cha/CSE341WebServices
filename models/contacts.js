const { getDb } = require("../db");


async function getAllContactsModel() {
    const db = await getDb();
    return db.collection("contacts").find().toArray();
};

module.exports = { getAllContactsModel };