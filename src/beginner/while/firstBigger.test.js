import { expect, test } from "vitest";
import { firstBigger } from "./firstBigger.js";

// Starting from some number n, keep increasing by some amount k until we reach
// or exceed m. The number we end up with is firstBigger(n, m, k). That is,
// the first number bigger than m.

test("Starting from 0, first number bigger than 10, increasing by 1", () => {
  expect(firstBigger(0, 10, 1)).toBe(11);
});

test("Starting from 0, first number bigger than 10, increasing by 3", () => {
  expect(firstBigger(0, 10, 3)).toBe(12);
});

test("Starting from 10, first number bigger than 10, increasing by 10", () => {
  expect(firstBigger(10, 10, 10)).toBe(20);
});

test("Starting from 10, first number bigger than 5, increasing by 127", () => {
  expect(firstBigger(10, 5, 127)).toBe(10);
});

test("Starting from 13, first number bigger than 23, increasing by 6", () => {
  expect(firstBigger(13, 23, 6)).toBe(25);
});

test("Starting from -12, first number bigger than 0, increasing by 5", () => {
  expect(firstBigger(-12, 0, 5)).toBe(3);
});

test("Starting from -100, first number bigger than 100, increasing by 9", () => {
  expect(firstBigger(-100, 100, 9)).toBe(107);
});
