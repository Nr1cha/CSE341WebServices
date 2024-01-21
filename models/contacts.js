const { ObjectId } = require("mongodb");
const { getDb } = require("../db");


async function getAllContactsModel() {
    const db = await getDb();
    return db.collection("contacts").find().toArray();
};

async function getSingleContactModel(id) {
    const db = await getDb();
    return db.collection("contacts").find({ "_id": new ObjectId(id) }).toArray();
};

module.exports = { getAllContactsModel, getSingleContactModel };