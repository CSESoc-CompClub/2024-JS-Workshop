import { expect, test, describe } from "vitest";
import { spellbindingAnd, ghostlyOr } from "../../beginner.js";

describe("testing logical and", () => {
    test("both false", () => {
        expect(spellbindingAnd(false, false)).toBe(false);
    });

    test("one true one false", () => {
        expect(spellbindingAnd(true, false)).toBe(false);
    });

    test("both true", () => {
        expect(spellbindingAnd(true, true)).toBe(true);
    });
});

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