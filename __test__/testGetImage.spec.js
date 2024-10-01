import { getImage } from "../src/client/js/pixabay.js";

describe("Testing the getImage function", () => {
    test("Should return image URL for a valid city", async () => {
        // Call the function with a valid city (e.g., 'London')
        const imageUrl = await getImage('London');

        // Check that the function returns a valid image URL (mock data)
        expect(imageUrl).toContain('https://');  // Checks that the returned value is a URL
    });

    test("Should return fallback image if no image is found", async () => {
        // Call the function with a city that returns no results (assuming unlikely city name)
        const imageUrl = await getImage('UnknownCity');

        // Check that the fallback image is returned
        expect(imageUrl).toBe('fallback-image.jpg');
    });
});
