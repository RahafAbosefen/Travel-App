/* import GET Function API */
import { getCoordinates } from "./geonames";
import { getFutureWeather } from "./weatherbit";
import { getImage } from './pixabay'

//Helper Function 
import { cutDwon } from "./cutDown";

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(event) {
    event.preventDefault();
    console.log("I am working fine");
    const city = document.getElementById('place').value;
    const tripDateInput = document.getElementById('date').value;
    const daysUntilTrip = cutDwon(tripDateInput);

    getCoordinates(city)
        .then(function (data) {
            // Fetch the weather data for the trip day
            getFutureWeather(data.latitude, data.longitude, daysUntilTrip)
                .then(weatherData => {
                    getImage(city)
                        .then(imageURL => {
                            // Post data to server, including weather data
                            postData('/add', {
                                countryName: data.country,
                                weather: weatherData.description, // Weather description
                                highTemp: weatherData.highTemp, // Max Temperature
                                lowTemp: weatherData.lowTemp, // Min Temperature
                                image: imageURL // Send image URL
                            });
                            if (place && date) {
                                const tripResults = document.getElementById('trip-results');
                                const tripCard = document.createElement('div');
                                tripCard.classList.add('trip-card');

                                // Update the results with fetched data
                                tripCard.innerHTML = `
                                    <div class="trip-image">
                                        <img src="${imageURL}" alt="Image of ${city}">
                                    </div>
                                    <div class="trip-details">
                                       <div class="bold-text">
                                            <h1>My Trip To: ${city},${data.country}</h1>
                                            <h1>Departing: ${new Date(tripDateInput).toLocaleDateString('en-GB')}</h1>
                                        </div>
                                        <p>${city},${data.country} is in ${daysUntilTrip} days away.</p>
                                        <p>${weatherData.description} Throught The day.</p>
                                        <p>High-${weatherData.highTemp} °C , Low-${weatherData.lowTemp} °C</p>
                                    </div>
                                    `;
                                tripResults.appendChild(tripCard);
                            }
                        })
                        .catch(error => {
                            console.log('Error fetching image:', error);
                        });
                });
        })
        .catch(error => {
            console.log('Error:', error);
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
