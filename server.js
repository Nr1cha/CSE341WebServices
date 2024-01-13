const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// my import of routes
const indexRoutes = require("./routes");
// const nameRoutes = require("./routes/name");`

app.use("/", indexRoutes);
// app.use("/name", nameRoutes.router);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});