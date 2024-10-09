/**
 * @description Fetches future weather data for a location using the Weatherbit API.
 * Returns the weather description, high, and low temperatures for the specified trip day.
 * @param {number} latitude - Latitude of the location.
 * @param {number} longitude - Longitude of the location.
 * @param {number} daysUntilTrip - Days until the trip (0 for today, 1 for tomorrow, etc.).
 * @param {string} weatherApiKey - API key for the Weatherbit API.
 * @param {string} weatherBaseURL - Base URL for the Weatherbit API.
 * @returns {Promise<{description: string, highTemp: number, lowTemp: number}>} 
 *          Resolves to an object with weather data.
 * @throws {Error} If fetching weather data fails or if no forecast is available.
 */

const getFutureWeather = async (latitude, longitude, daysUntilTrip, weatherApiKey, weatherBaseURL) => {
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

// Export getFutureWeather
export { getFutureWeather };