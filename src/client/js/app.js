/* import GET Function API */
import { getCoordinates } from "./geonames";
import { getFutureWeather } from "./weatherbit";
import { getImage } from './pixabay'

//Helper Function 
import { cutDwon } from "./cutDown";
import { updateUI } from "./updateUI";
import { saveTripData } from './tripStorage';

/* Function called by event listener */
function performAction(event) {
    event.preventDefault();
    const city = document.getElementById('place').value;
    const tripDateInput = document.getElementById('date').value;
    const daysUntilTrip = cutDwon(tripDateInput);
    // Create a tripData object to store the data locally and on the server
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
    getCoordinates(city)
        .then(function (data) {
            tripData.country = data.country;
            getFutureWeather(data.latitude, data.longitude, daysUntilTrip)
                .then(weatherData => {
                    tripData.weatherDescription = weatherData.description;
                    tripData.highTemp = weatherData.highTemp;
                    tripData.lowTemp = weatherData.lowTemp;
                    getImage(city)
                        .then(imageURL => {
                            tripData.imageURL = imageURL;
                            // Post data to the server
                            postData('/add', {
                                countryName: data.country,
                                weather: weatherData.description, // Weather description
                                highTemp: weatherData.highTemp, // Max Temperature
                                lowTemp: weatherData.lowTemp, // Min Temperature
                                image: imageURL // Send image URL
                            });
                            // Store tripData in Local Storage
                            saveTripData(tripData);
                            // Update UI with tripData
                            updateUI(tripData);
                            // Clear input fields
                            document.getElementById('place').value = '';
                            document.getElementById('date').value = '';
                        })
                        .catch(error => {
                            console.log('Error fetching image:', error);
                        });
                })
                .catch(error => {
                    console.log('Error fetching weather:', error);
                });
        })
        .catch(error => {
            console.log('Error fetching coordinates:', error);
        });
}

/* Function to POST data */
async function postData(url = '', data = {}) {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}

export { performAction, postData };
