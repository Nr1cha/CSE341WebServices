const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    getSingleContact,
    updateSingleContact,
    setSingleContact,
    deleteSingleContact
} = require("../controllers/contacts");



// get the name
router.get("/", getAllContacts);
router.get("/:id", getSingleContact);

// where to post route
router.post("/:id", updateSingleContact);

// where to put route
router.put("/create", setSingleContact);

// where to delete route
router.delete("/:id", deleteSingleContact);

module.exports = router;