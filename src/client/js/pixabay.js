/**
 * @description Fetches an image URL for a specified city using the Pixabay API.
 * Returns the URL of the first image found or a fallback image if no results are found.
 * @param {string} city - The city name for which to fetch an image.
 * @param {string} pixabayApiKey - The API key for authenticating requests to the Pixabay API.
 * @param {string} pixabayBaseURL - The base URL for the Pixabay API.
 * @returns {Promise<string>} A promise that resolves to the image URL or a fallback image.
 * @throws {Error} If there's an issue with the API request.
 */
const getImage = async (city, pixabayApiKey, pixabayBaseURL) => {
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

// Export getImage
export { getImage };
