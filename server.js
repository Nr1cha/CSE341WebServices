const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { connectToServer } = require("./db");

// my import of routes
const indexRoutes = require("./routes");
const contactsRoutes = require("./routes/contacts");
// const nameRoutes = require("./routes/name");`

app.use("/", indexRoutes);
app.use("/contacts", contactsRoutes);

connectToServer((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });

    }
})
