import { expect, test } from "vitest";
import { removeCreature } from "./beginner.js";

test("removeCreature", () => {
  let creatures = ["ghost", "vampire"];
  let newList = ["ghost"];
  expect(removeCreature(creatures)).toEqual(newList);
});