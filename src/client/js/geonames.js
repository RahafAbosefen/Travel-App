const geonamesApiKey = "&maxRows=1&username=rahaf_abosefen";
const geonamesBaseURL = "https://secure.geonames.org/searchJSON?q=";

const getCoordinates = async (city) => {
    try {
        const res = await fetch(`${geonamesBaseURL}${city}${geonamesApiKey}`);
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

export { getCoordinates };