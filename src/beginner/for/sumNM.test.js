import { expect, test } from "vitest";
import { sumNM } from "./sumNM.js";

// sum the numbers from n to m

test("Sums the first 5 integers", () => {
  expect(sumNM(1, 5)).toBe(15);
});


test("Sums the first 100 integers", () => {
  expect(sumNM(1, 100)).toBe(5050);
});

test("Sums no integers!", () => {
	expect(sumNM(0, 0)).toBe(0);
});


test("Sums the integers from 2 to 10", () => {
  expect(sumNM(2, 10)).toBe(54);
});

test("Sums the integers from 50 to 100", () => {
  expect(sumNM(50, 100)).toBe(3825);
});

test("Sums the integers from -10 to 15", () => {
	expect(sumNM(-10, 15));
});
