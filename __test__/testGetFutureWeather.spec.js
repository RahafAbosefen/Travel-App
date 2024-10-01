import { getFutureWeather } from "../src/client/js/weatherbit.js";

describe("Testing the getFutureWeather function", () => {
    test("Should return correct weather data for a valid trip day", async () => {
        // Use valid latitude and longitude for the test
        const latitude = 48.8566; // Example: Paris
        const longitude = 2.3522;
        const daysUntilTrip = 1; // Assume trip is 1 day away

        // Call the function with real API
        const weatherData = await getFutureWeather(latitude, longitude, daysUntilTrip);

        // Check that the function returns valid weather data
        expect(weatherData).toBeDefined();
        expect(weatherData).toHaveProperty("description");
        expect(weatherData).toHaveProperty("highTemp");
        expect(weatherData).toHaveProperty("lowTemp");
    });
});
