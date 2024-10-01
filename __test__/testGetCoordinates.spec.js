import { getCoordinates } from "../src/client/js/geonames";

describe("Testing the value returned from API", () => {
    test("Testing the getCoordinates() function", () => {

        // Define the input for the function, if any, in the form of variables/array
        const place = 'london';

        expect(getCoordinates(place)).toBeDefined();
    })
});
