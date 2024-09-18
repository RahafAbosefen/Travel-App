// Personal API Key for GeoNames API
const geonamesApiKey = '&maxRows=1&username=rahaf_abosefen';
const geonamesBaseURL = 'https://secure.geonames.org/searchJSON?q=';

// GET request to 'GEONAMES' API
async function getCoordinates(city) {
    const res = await fetch(`${geonamesBaseURL}${city}${geonamesApiKey}`);
    const data = await res.json();
    console.log('API response:', data);
    try {
        if (data.geonames.length > 0) {
            const latitude = data.geonames[0].lat;
            const longitude = data.geonames[0].lng;
            const country = data.geonames[0].countryName;

            return { latitude, longitude, country };
        } else {
            throw new Error('City not found');
        }
    } catch (error) {
        console.log('Error getting data from API', error);
        alert('Please enter a valid location');
    }
}

export {getCoordinates};