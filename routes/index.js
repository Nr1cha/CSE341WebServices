const express = require("express");
const router = express.Router();
const { returnName } = require("../controllers");

// get the name
router.get("/", returnName);

module.exports = router;