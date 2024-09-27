import { expect, test, describe } from "vitest";
import { rizzMaxxing, sigmaGrindset } from "./advanced";

describe("rizzMaxxing tests", () => {
    test("example case", () => {
        expect(rizzMaxxing([1, 2, 3, 4], [2, 3, 5, 6])).toBe(3);
    });
});

describe("sigmaGrindset tests", () => {
    test("example case", () => {
        const start = [1, 1, 4];
        const end = [1, 3, 5];
        const costs = {
            1: {sell: 1, buy: 2, trade: 2},
            2: {sell: 2, buy: 2, trade: 3},
            3: {sell: 1, buy: 5, trade: 3},
            4: {sell: 2, buy: 1, trade: 9},
            5: {sell: 1, buy: 6, trade: 4},
        }

        expect(sigmaGrindset(start, end, costs)).toBe(10);
    });
});

describe("cappedMogging tests", () => {
    test("example case", () => {
        const start = [1, 1, 4];
        const end = [1, 3, 5];
        const costs = {
            1: {sell: 1, buy: 2, trade: 2},
            2: {sell: 2, buy: 2, trade: 3},
            3: {sell: 1, buy: 5, trade: 3},
            4: {sell: 2, buy: 1, trade: 9},
            5: {sell: 1, buy: 6, trade: 4},
        }

        const limits = {
            1: {sell: 1, buy: 1, trade: 1},
            2: {sell: 2, buy: 2, trade: 1},
            3: {sell: 1, buy: 1, trade: 2},
            4: {sell: 0, buy: 1, trade: 1},
            5: {sell: 1, buy: 1, trade: 1},
        }

        expect(sigmaGrindset(start, end, costs, limits)).toBe(11);
    });
});

