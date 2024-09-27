import { expect, test, describe } from "vitest";
import { addCreature, creatureRecorded, townSpookiness, notFound } from "../spookyTown.js";

describe("creepyTown", () => {
  let bestiary = [
    {
      name: "ghost",
      spookiness: 2,
      sightings: 3
    },
    {
      name: "vampire",
      spookiness: 5,
      sightings: 10
    },
    {
      name: "zombie",
      spookiness: 0,
      sightings: 0,
    },
  ]

  let bestiary2 = [
    {
      name: "ghost",
      spookiness: 2,
      sightings: 3
    },
    {
      name: "vampire",
      spookiness: 5,
      sightings: 10
    },
    {
      name: "zombie",
      spookiness: 0,
      sightings: 0,
    },
    {
      name: "mummy",
      spookiness: 1,
      sightings: 3
    }
  ]

  test("creatureRecorded true", () => {
    expect(creatureRecorded(bestiary, "vampire")).toBe(true);
  });

  test("creatureRecorded false", () => {
    expect(creatureRecorded(bestiary, "vaksdjs")).toBe(false);
  });

  test("addCreature success", () => {
    expect(addCreature(bestiary, "mummy", 1, 3).sort()).toEqual(bestiary2.sort());
  });

  test("townSpookiness < 100", () => {
    expect(townSpookiness(bestiary)).toBe("Totally normal!");
  });

  test("townSpookiness = 100", () => {
    bestiary = addCreature(bestiary, "Banshee", 1, 41);
    expect(townSpookiness(bestiary)).toBe("Seems a little haunted...");
  });

  test("100 < townSpookiness < 300", () => {
    bestiary = addCreature(bestiary, "Witch", 1, 25);
    expect(townSpookiness(bestiary)).toBe("Seems a little haunted...");
  });

  test("townSpookiness = 300", () => {
    bestiary = addCreature(bestiary, "Ghost Bird", 1, 175);
    expect(townSpookiness(bestiary)).toBe("Seems a little haunted...");
  });

  test("townSpookiness > 300", () => {
    bestiary = addCreature(bestiary, "Necromancer", 2, 200);
    expect(townSpookiness(bestiary)).toBe("My best friend is a poltergeist!");
  });

  test("notFound they all exist", () => {
    let JerryList = ["ghost", "vampire", "mummy"]
    expect(notFound(bestiary, JerryList)).toBe("They all exist!");
  });

  test("notFound one doesn't exist (without sightings: 0 in bestiary)", () => {
    bestiary.splice(2, 1);
    let JerryList = ["ghost", "vampire", "mummy", "nekomata"]
    expect(notFound(bestiary, JerryList)).toBe("I didn't see them: nekomata");
  });

  test("notFound one doesn't exist, with sightings: 0 in bestiary", () => {
    addCreature(bestiary, "zombie", 0, 0)
    addCreature(bestiary, "demon", 0, 0)
    let JerryList = ["ghost", "vampire", "mummy", "nekomata", "demon", "zombie", "werewolf"]
    expect(notFound(bestiary, JerryList)).toBe("I didn't see them: demon, nekomata, werewolf, zombie");
  });

});
