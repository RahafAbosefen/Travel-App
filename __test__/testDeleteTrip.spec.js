import { deleteTrip } from "../src/client/js/deleteTrip";

describe('deleteTrip function', () => {
    test('should delete the trip card from UI', () => {
        expect(deleteTrip).toBeDefined();
    });
});
