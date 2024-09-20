import { expect, test } from "vitest";
import { sumN } from "./sumN.js";

// Sum the integers from 1 to n

test("Sums the first 5 integers", () => {
  expect(sumN(5)).toBe(15);
});


test("Sums the first 100 integers", () => {
  expect(sumN(100)).toBe(5050);
});

test("Sums no integers!", () => {
	expect(sumN(0)).toBe(0);
});
