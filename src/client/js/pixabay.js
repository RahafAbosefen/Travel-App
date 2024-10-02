// Personal API Key for Pixabay API
const pixabayApiKey = "45804559-a7e100c007ed36747e031c5ec";
const pixabayBaseURL = "https://pixabay.com/api/?key=";

const getImage = async (city) => {
    try {
        const res = await fetch(`${pixabayBaseURL}${pixabayApiKey}&q=${city}&image_type=photo`);
        const data = await res.json();
        if (data.hits.length > 0) {
            // Return the first image
            return data.hits[0].webformatURL;
        }
        // Fallback image when no result found
        return 'fallback-image.jpg';
    } catch (error) {
        console.log(
            'Error',
            error
        );
    }
};

export { getImage };
