// Importing API functions and helpers
import { cutDown } from "./cutDown";
import { getCoordinates } from "./geonames";
import { getFutureWeather } from "./weatherbit";
import { getImage } from "./pixabay";
import { saveTripData } from "./tripStorage";
import { updateUI } from "./updateUI";

/**
 * @description Fetches API keys and URLs from the server.
 * @returns {Promise<Object|null>} A promise that resolves to an object containing API keys and URLs,
 *          or null if an error occurs.
 */
const fetchApiKeys = async () => {
    try {
        const response = await fetch('/api-keys');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const apiKeys = await response.json();
        return apiKeys; // Return the API keys and URLs
    } catch (error) {
        console.error('Error fetching API keys:', error);
        return null; // Return null if there's an error
    }
};

/**
 * @description Sends a POST request to the specified URL with the provided data.
 * @param {string} url - The endpoint to send data to.
 * @param {Object} data - The data to send in the request body.
 * @returns {Promise<Object>} A promise that resolves to the response data from the server.
 */
const postData = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log('Error:', error);
    }
};

/**
 * @description Clears the input fields for city and date.
 */
const clearForm = () => {
    document.getElementById('place').value = '';
    document.getElementById('date').value = '';
};

/**
 * @description Handles the form submission to gather trip data, fetches weather and image data,
 *              updates the UI, and stores the trip data.
 * @param {Event} event - The form submission event.
 */
const performAction = async (event) => {
    event.preventDefault();

    // Get the city and trip date input values
    const city = document.getElementById('place').value;
    const tripDateInput = document.getElementById('date').value;
    const daysUntilTrip = cutDown(tripDateInput);

    // Create an object to store the trip data
    const tripData = {
        city,
        country: '',
        tripDateInput,
        daysUntilTrip,
        weatherDescription: '',
        highTemp: '',
        lowTemp: '',
        imageURL: ''
    };

    // Fetch API keys and URLs
    const apiKeys = await fetchApiKeys();

    if (!apiKeys) {
        console.error('API keys could not be loaded.');
        return;
    }

    const { geonamesApiKey, pixabayApiKey, weatherApiKey, geonamesBaseURL, pixabayBaseURL, weatherBaseURL } = apiKeys;

    // Call APIs and update tripData
    try {
        const coordinatesData = await getCoordinates(city, geonamesApiKey, geonamesBaseURL);
        tripData.country = coordinatesData.country;

        const weatherData = await getFutureWeather(
            coordinatesData.latitude,
            coordinatesData.longitude,
            daysUntilTrip,
            weatherApiKey,
            weatherBaseURL
        );

        tripData.weatherDescription = weatherData.description;
        tripData.highTemp = weatherData.highTemp;
        tripData.lowTemp = weatherData.lowTemp;

        const imageURL = await getImage(city, pixabayApiKey, pixabayBaseURL);
        tripData.imageURL = imageURL;

        // Post data to the server
        await postData('/add', {
            countryName: tripData.country,
            weather: tripData.weatherDescription,
            highTemp: tripData.highTemp,
            lowTemp: tripData.lowTemp,
            image: tripData.imageURL,
        });

        // Save trip data and update the UI
        saveTripData(tripData);
        updateUI(tripData);
        clearForm();
    } catch (error) {
        console.log('Error:', error);
    }
};

// Export performAction
export { performAction };
