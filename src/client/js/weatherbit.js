// Personal API Key for weatherbit API
const weatherApiKey = '5f1d68e7c6b74cf7b06c7322a70514c2';
const weatherBaseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';


// GET request to 'FutureWeather' API
/* Function to GET future weather data */
async function getFutureWeather(latitude, longitude, daysUntilTrip) {

    const response = await fetch(`${weatherBaseURL}${latitude}&lon=${longitude}&key=${weatherApiKey}&units=M&days=16`);
    const forecastData = await response.json();
    console.log('Weather Forecast API response:', forecastData);
    
    try {
        // Get the weather data for the trip day
        const forecastForTripDay = forecastData.data[daysUntilTrip];

        if (forecastForTripDay) {
            const description = forecastForTripDay.weather.description;
            const highTemp = forecastForTripDay.high_temp;
            const lowTemp = forecastForTripDay.low_temp;


            return { description, highTemp, lowTemp };
        } else {
            throw new Error('No forecast data available for the selected date.');
        }

    } catch (error) {
        console.error('Error fetching future weather data:', error);
        alert(`Failed to fetch weather data: ${error.message}`);
    }
}

export { getFutureWeather };