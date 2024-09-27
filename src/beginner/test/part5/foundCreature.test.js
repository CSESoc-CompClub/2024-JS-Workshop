import { expect, test } from "vitest";
import { foundCreature } from "../../5_arrays.js";

test("foundCreature", () => {
  let creatures = ["ghost", "vampire", "zombie", "poltergeist", "witch", "mummy", "banshee"];
  expect(foundCreature(creatures, 'ghost')).toEqual(true);
  expect(foundCreature(creatures, 'Tom')).toEqual(null);
});