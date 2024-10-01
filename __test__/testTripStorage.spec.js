import { saveTripData, loadSavedTrip } from "../src/client/js/tripStorage.js";


describe("Testing the saveTripData functionality", () => {
    test("Testing the saveTripData function", () => {
        expect(saveTripData).toBeDefined();
    });
});

describe("Testing the loadSavedTrip functionality", () => {
    test("Testing the loadSavedTrip function", () => {
        expect(loadSavedTrip).toBeDefined();
    });
});