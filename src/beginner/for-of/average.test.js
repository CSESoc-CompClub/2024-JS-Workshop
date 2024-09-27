import { expect, test } from "vitest";
import { average } from "./average.js";

// n.b: use Array.length to find length of the array

test("Short list of numbers", () => {
	const numbers = [ 1, 2, 3 ];
	expect(average(numbers)).toBe(2);
});

test("Single number", () => {
	const numbers = [ 102 ];
	expect(average(numbers)).toBe(102);
});

test("Float average", () => {
	const numbers = [ 1, 2, 3, 4 ];
	expect(average(numbers)).toBe(2.5);
});

test("Empty list", () => {
	const numbers = [];
	expect(average(numbers)).toBe(0);
});

test("No evens", () => {
	const numbers = [ 1, 3, 5, 7, 9];
	expect(average(numbers)).toBe(5);
});

test("All evens", () => {
	const numbers = [ 2, 4, 6, 8, 10];
	expect(average(numbers)).toBe(6);
});

test("Long list of numbers", () => {
	const numbers = [ 3, 7, 9, 11, 2, 5, 8, 3, 7, 1, 2, 3, 4 ];
	expect(average(numbers)).toBe(5);
});

