const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

// get all contacts
async function getAllContactsModel() {
    const db = await getDb();
    return db.collection("contacts").find().toArray();
};
// get single contact
async function getSingleContactModel(id) {
    const db = await getDb();
    return db.collection("contacts").find({ "_id": new ObjectId(id) }).toArray();
};

// #######################

// post function
async function updateSingleContactModel(id, payload = {}) {
    const db = await getDb();

    return db.collection("contacts").updateOne(
        { "_id": new ObjectId(id) },
        {
            $set: {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                favoriteColor: payload.favoriteColor,
                birthday: payload.birthday
            }
        }
    )
};

// put function
async function setSingleContactModel(payload = {}) {
    const db = await getDb();

    return db.collection("contacts").insertOne(
        {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            favoriteColor: payload.favoriteColor,
            birthday: payload.birthday
        }
    )
};

// delete funtion
async function deleteSingleContactModel(id) {
    const db = await getDb();

    return db.collection("contacts").deleteOne(
        { "_id": new ObjectId(id) }
    );
};

module.exports = { getAllContactsModel, getSingleContactModel, updateSingleContactModel, setSingleContactModel, deleteSingleContactModel };