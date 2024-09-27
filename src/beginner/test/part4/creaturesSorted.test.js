import { expect, test } from "vitest";
import { creaturesSorted } from "../../beginner.js";

test("creaturesSorted", () => {
  let creatures = ["ghost", "vampire", "zombie", "poltergeist", "witch", "mummy", "banshee"];
  let newList = ["banshee", "ghost", "mummy", "poltergeist", "vampire", "witch", "zombie"];
  expect(creaturesSorted(creatures)).toEqual(newList);
});