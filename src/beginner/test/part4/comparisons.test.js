import { expect, test } from "vitest";
import { candyCost } from "../../beginner.js";

test("comparisons", () => {
  let x = 5;
  let y = 3;
  expect(candyCost(x, y)).toBe(y);
  expect(candyCost(y, x)).toBe(y);

  let a = 2.01;
  let b = 5.02;
  expect(candyCost(b, a)).toBe(a);
});