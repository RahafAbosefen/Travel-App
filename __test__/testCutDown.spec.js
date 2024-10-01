import { cutDwon } from "../src/client/js/cutDown.js";

describe("Testing the cutDwon functionality", () => {
    test("Testing the cutDwon() function", () => {
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 6);

        const daysUntilTrip = cutDwon(futureDate.toISOString());

        expect(cutDwon).toBeDefined();  
        expect(daysUntilTrip).toBe(6);
    });
});
