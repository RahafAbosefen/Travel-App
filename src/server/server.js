// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');

// Use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use CORS for cross-origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Define the port using const
const PORT = 8080;

// Setup Server and listening callback (using arrow function)
app.listen(
    PORT,
    () => {
        console.log(`Server running on http://localhost:${PORT}`);
    }
);

// Initialize all route with a callback function

// GET Route to serve the homepage
app.get(
    '/',
    (req, res) => {
        res.sendFile('dist/index.html');
    }
);

// GET test route
app.get(
    '/test',
    (req, res) => {
        res.send(mockAPIResponse);
    }
);

// POST Route to receive and update project data
app.post(
    '/add',
    (req, res) => {
        projectData = {
            // Country from client
            country: req.body.countryName,
            // Weather description from client
            weather: req.body.weather,
            // High temperature
            highTemp: req.body.highTemp,
            // Low temperature
            lowTemp: req.body.lowTemp,
            // Image URL
            image: req.body.image
        };

        // Respond with the updated projectData
        res.send(projectData);
    }
);