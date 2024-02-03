const express = require("express");
const router = express.Router();
const { returnName } = require("../controllers");
const swaggerUI = require("swagger-ui-express");
const swaggerConfig = require("../swagger-output.json");
const contactsRoutes = require("./contacts");

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));
router.use("/contacts", contactsRoutes);
// get the name
router.get("/", returnName);

module.exports = router;