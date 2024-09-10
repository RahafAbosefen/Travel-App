// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'))
PORT = 8080;
// Setup Server
const server = app.listen(PORT, listening);
// Callback to debug
function listening() {
    console.log(`Server Runing on http://localhost:${PORT}`);
}

// Initialize all route with a callback function

// Callback function to complete GET 
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// Post Route

