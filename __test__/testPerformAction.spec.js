import { performAction } from "../src/client/js/app.js";

describe("Testing the submit functionality", () => {
    test("Testing the performAction(event) function", () => {
        expect(performAction).toBeDefined();
    });
});
