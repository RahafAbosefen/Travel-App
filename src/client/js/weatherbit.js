// Personal API Key for weatherbit API
const weatherApiKey = "5f1d68e7c6b74cf7b06c7322a70514c2";
const weatherBaseURL = "https://api.weatherbit.io/v2.0/forecast/daily?lat=";

// Function to GET future weather data
const getFutureWeather = async (latitude, longitude, daysUntilTrip) => {
    try {
        const res = await fetch(`${weatherBaseURL}${latitude}&lon=${longitude}&key=${weatherApiKey}&units=M&days=16`);
        const forecastData = await res.json();
        const forecastForTripDay = forecastData.data[daysUntilTrip];

        if (forecastForTripDay) {
            const { description } = forecastForTripDay.weather;
            const highTemp = forecastForTripDay.high_temp;
            const lowTemp = forecastForTripDay.low_temp;

            return { description, highTemp, lowTemp };
        } else {
            throw new Error('No forecast data available for the selected date.');
        }
    } catch (error) {
        console.error(
            'Error fetching future weather data:',
            error
        );
        customAlert(`Failed to fetch weather data: ${error.message}`);
    }
};

export { getFutureWeather };