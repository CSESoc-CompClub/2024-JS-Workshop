import { expect, test, describe } from "vitest";
import { ghostlyOr } from "../../beginner.js";

describe("testing logical or", () => {
    test("both false", () => {
        expect(ghostlyOr(false, false)).toBe(false);
    });

    test("one true one false", () => {
        expect(ghostlyOr(true, false)).toBe(true);
    });

    test("both true", () => {
        expect(ghostlyOr(true, true)).toBe(true);
    });
});