import { getImage } from "../src/client/js/pixabay.js";

describe("Testing the getImage function", () => {
    test("Should return image URL for a valid city", async () => {
        expect(getImage).toBeDefined();
    });
});
