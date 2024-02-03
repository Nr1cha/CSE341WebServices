require('dotenv').config(); //load
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'List of Contacts'
    },
    host: process.env.HOST
};

const outputFile = `./swagger-output-${process.env.LANE}.json`;
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);