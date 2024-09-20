import { expect, test } from "vitest";
import { skipSum } from "./skipSum.js";

// Sum the numbers from n to m, skip counting by k each time.
// TODO: maybe make a test for skip counting something like skipSum(1, 5, 5)?

test("Sums the first 5 integers", () => {
  expect(skipSum(1, 5, 1)).toBe(15);
});


test("Sums the first 100 integers", () => {
  expect(skipSum(1, 100, 1)).toBe(5050);
});

test("Sums no integers!", () => {
	expect(skipSum(0, 0, 1)).toBe(0);
});

///////////////////////////////////////////////
test("Sums the integers from 2 to 10", () => {
  expect(skipSum(2, 10, 1)).toBe(54);
});

test("Sums the integers from 50 to 100", () => {
  expect(skipSum(50, 100, 1)).toBe(3825);
});

test("Sums the integers from -10 to 15", () => {
	expect(skipSum(-10, 15, 1));
});

///////////////////////////////////////////////
test("Sums the even integers from 2 to 100", () => {
  expect(skipSum(2, 100, 2)).toBe(2550);
});

test("Sums 3 to 108, skipping 5 each time", () => {
  expect(skipSum(3, 108, 5)).toBe(1221);
});

test("Sums -25 to 25, skipping 5 each time", () => {
	expect(skipSum(-25, 25, 5)).toBe(0);
});

test("Sums -25 to 30, skipping 5 each time", () => {
	expect(skipSum(-25, 30, 5)).toBe(30);
});
///////////////////////////////////////////////
