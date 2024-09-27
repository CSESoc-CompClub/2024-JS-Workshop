import { expect, test } from "vitest";
import { removeCreature } from "../../5_arrays.js";

test("removeCreature", () => {
  let creatures = ["ghost", "vampire"];
  let newList = ["ghost"];
  expect(removeCreature(creatures)).toEqual(newList);
});