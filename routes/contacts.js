const express = require("express");
const router = express.Router();
const { getAllContacts } = require("../controllers/contacts");

// get the name
router.get("/", getAllContacts);
// router.get('')

module.exports = router;