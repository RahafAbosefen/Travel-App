// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
// Start up an instance of app
const app = express();

/* Middleware*/
// Import body-parser to parse incoming request bodies
const bodyParser = require('body-parser');
// Import cors to allow cross-origin requests
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');

// Use body-parser as middleware to handle POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use CORS for cross-origin allowance
app.use(cors());

// Initialize the main project folder (serve static files from 'dist')
app.use(express.static('dist'));

// Define the port using const
const PORT = 8080;

// API keys and Base URLs are stored in environment variables for security
const geonamesApiKey = process.env.GEONAMES_API_KEY;
const pixabayApiKey = process.env.PIXABAY_API_KEY;
const weatherApiKey = process.env.WEATHER_API_KEY;


// Base URLs for each API
const geonamesBaseURL = "https://secure.geonames.org/searchJSON?q=";
const pixabayBaseURL = "https://pixabay.com/api/?key=";
const weatherBaseURL = "https://api.weatherbit.io/v2.0/forecast/daily?lat=";

/// Log the API keys to check if they are correctly loaded (for debugging purposes)
console.log(`Geonames API Key: ${geonamesApiKey}`);
console.log(`Pixabay API Key: ${pixabayApiKey}`);
console.log(`Weather API Key: ${weatherApiKey}`);

// Setup Server and listening on the defined port
app.listen(
    PORT,
    () => {
        console.log(`Server running on http://localhost:${PORT}`);
    }
);

// Routes

// GET Route to serve the homepage
app.get(
    '/',
    (req, res) => {
        res.sendFile('dist/index.html');
    }
);

// GET Route for testing API response (mock API response)
app.get(
    '/test',
    (req, res) => {
        res.send(mockAPIResponse);
    }
);

// POST Route for handling Geonames API request
app.post('/api/geonames', async (req, res) => {
    // Extract the city name from the request body
    const { city } = req.body;
    const apiUrl = `${geonamesBaseURL}${city}&maxRows=1&username=${geonamesApiKey}`;

    try {
        const apiResponse = await fetch(apiUrl);
        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }
        const result = await apiResponse.json();
        console.log(result);
        res.send(result);
    } catch (error) {
        console.log('Error fetching data from Geonames API:', error);
        res.status(500).send({ error: 'Failed to retrieve Geonames data' });
    }
});

// POST Route for handling Weatherbit API request
app.post('/api/weatherbit', async (req, res) => {
    const { latitude, longitude, daysUntilTrip } = req.body;
    const apiUrl = `${weatherBaseURL}${latitude}&lon=${longitude}&key=${weatherApiKey}&units=M&days=16`;

    try {
        const apiResponse = await fetch(apiUrl);
        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }
        const result = await apiResponse.json();
        console.log(result);
        res.send(result);
    } catch (error) {
        console.log('Error fetching data from Weatherbit API:', error);
        res.status(500).send({ error: 'Failed to retrieve weather data' });
    }
});

// POST Route for handling Pixabay API request
app.post('/api/pixabay', async (req, res) => {
    const { city } = req.body;
    const apiUrl = `${pixabayBaseURL}${pixabayApiKey}&q=${encodeURIComponent(city)}&image_type=photo`;

    try {
        const apiResponse = await fetch(apiUrl);
        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }
        const result = await apiResponse.json();
        console.log(result);
        res.send(result);
    } catch (error) {
        console.log('Error fetching data from Pixabay API:', error);
        res.status(500).send({ error: 'Failed to retrieve Pixabay data' });
    }
});

// API Key Route to provide the client with API keys and base URLs
app.get('/api-keys', (req, res) => {
    res.json({
        geonamesApiKey,
        pixabayApiKey,
        weatherApiKey,
        geonamesBaseURL,
        pixabayBaseURL,
        weatherBaseURL
    });
});
