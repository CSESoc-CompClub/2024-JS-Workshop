import { expect, test } from "vitest";
import { addCreature } from "./beginner.js";

test("addCreature", () => {
  let creatures = ["ghost", "vampire"];
  let newList = ["ghost", "vampire", "zombie"];
  expect(addCreature(creatures, "zombie")).toEqual(newList);
});