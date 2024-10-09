import { getCoordinates } from "../src/client/js/geonames";

describe("Testing the value returned from API", () => {
    test("Testing the getCoordinates() function", () => {
        expect(getCoordinates).toBeDefined();
    })
});
