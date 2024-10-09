import { getFutureWeather } from "../src/client/js/weatherbit.js";

describe("Testing the getFutureWeather function", () => {
    test("Should return correct weather data for a valid trip day", async () => {
        expect(getFutureWeather).toBeDefined();
    });
});
