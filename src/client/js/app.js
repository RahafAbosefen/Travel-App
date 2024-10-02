// Importing API functions and helpers
import { cutDown } from "./cutDown";
import { getCoordinates } from "./geonames";
import { getFutureWeather } from "./weatherbit";
import { getImage } from "./pixabay";
import { saveTripData } from "./tripStorage";
import { updateUI } from "./updateUI";


// Function to POST data 
const postData = async (url = '', data = {}) => {
    const res = await fetch(
        url,
        {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log(
            'Error:',
            error
        );
    }
};

// Helper function to clear input fields
const clearForm = () => {
    document.getElementById('place').value = '';
    document.getElementById('date').value = '';
};

// Function called by event listener
const performAction = (event) => {
    event.preventDefault();
    const city = document.getElementById('place').value;
    const tripDateInput = document.getElementById('date').value;
    const daysUntilTrip = cutDown(tripDateInput);

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

    getCoordinates(city).
        then((data) => {
            tripData.country = data.country;
            return getFutureWeather(
                data.latitude,
                data.longitude,
                daysUntilTrip
            );
        }).
        then((weatherData) => {
            tripData.weatherDescription = weatherData.description;
            tripData.highTemp = weatherData.highTemp;
            tripData.lowTemp = weatherData.lowTemp;
            return getImage(city);
        }).
        then((imageURL) => {
            tripData.imageURL = imageURL;
            postData(
                '/add',
                {
                    countryName: tripData.country,
                    weather: tripData.weatherDescription,
                    highTemp: tripData.highTemp,
                    lowTemp: tripData.lowTemp,
                    image: tripData.imageURL
                }
            );
            saveTripData(tripData);
            updateUI(tripData);
            clearForm();
        }).
        catch((error) => console.log(
            'Error:',
            error
        ));
};

export { performAction, postData };
