import { expect, test } from "vitest";
import { mapEven } from "./mapEven.js";

test("Short list of numbers", () => {
	const numbers = [ 1, 2, 3 ];
	expect(mapEven(numbers)).toStrictEqual([ 2 ]);
});

test("Empty list", () => {
	const numbers = [];
	expect(mapEven(numbers)).toStrictEqual([]);
});

test("No evens", () => {
	const numbers = [ 1, 3, 5, 7, 9];
	expect(mapEven(numbers)).toStrictEqual([]);
});

test("All evens", () => {
	const numbers = [ 2, 4, 6, 8, 10];
	expect(mapEven(numbers)).toStrictEqual([ 2, 4, 6, 8, 10 ]);
});

test("Long list of numbers", () => {
	const numbers = [ 3, 7, 9, 11, 2, 5, 8, 3, 7, 1, 2, 3, 4 ];
	expect(mapEven(numbers)).toStrictEqual([ 2, 8, 2, 4 ]);
});

