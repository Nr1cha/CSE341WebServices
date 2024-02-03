const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { connectToServer } = require("./db");
const bodyParser = require("body-parser");


// my import of routes
const indexRoutes = require("./routes");
// const nameRoutes = require("./routes/name");`

app.use(bodyParser.json()); //this must be before my other stuff in the URL
app.use("/", indexRoutes);


connectToServer((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });

    }
})
