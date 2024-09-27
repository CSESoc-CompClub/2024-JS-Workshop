import { expect, test } from "vitest";
import { numberofCreatures } from "../../5_arrays.js";

test("numberOfCreatures", () => {
  let creatures = ["ghost", "vampire"];
  expect(numberofCreatures(creatures)).toBe(2);
  expect(numberofCreatures([])).toBe(0);
  expect(numberofCreatures(["1", "2", "3"])).toBe(3);
});