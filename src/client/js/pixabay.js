// Personal API Key for Pixabay API
const pixabayApiKey = '45804559-a7e100c007ed36747e031c5ec';
const pixabayBaseURL = 'https://pixabay.com/api/?key=';

// GET request to 'PIXABAY' API
async function getImage(city) {
    const response = await fetch(`${pixabayBaseURL}${pixabayApiKey}&q=${city}&image_type=photo`);
    const data = await response.json();
    console.log('getImage response:', data);
    try {
        if (data.hits.length > 0) {
            return data.hits[0].webformatURL; // Return the first image
        }
        return 'fallback-image.jpg'; // Fallback image when no result found
    } catch (error) {
        console.log('Error', error);
    }
}
export { getImage };