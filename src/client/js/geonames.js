/**
 * @description Fetches the geographic coordinates (latitude and longitude) 
 * for a specified city using the GeoNames API, returning the coordinates 
 * and country name.
 * @param {string} city - The city name.
 * @param {string} geonamesApiKey - The GeoNames API key.
 * @param {string} geonamesBaseURL - The base URL for the GeoNames API.
 * @returns {Promise<{latitude: number, longitude: number, country: string}>} 
 *          A promise resolving to an object with latitude, longitude, and country.
 * @throws {Error} If the city is not found or if there is an API request issue.
 */
const getCoordinates = async (city, geonamesApiKey, geonamesBaseURL) => {
    try {
        const res = await fetch(`${geonamesBaseURL}${city}&maxRows=1&username=${geonamesApiKey}`);
        const data = await res.json();
        if (data.geonames.length > 0) {
            const { lat: latitude, lng: longitude, countryName: country } = data.geonames[0];
            return { latitude, longitude, country };
        } else {
            throw new Error('City not found');
        }
    } catch (error) {
        console.log(
            'Error getting data from API',
            error
        );
        customAlert('Please enter a valid location');
    }
};

// Export getCoordinates
export { getCoordinates };