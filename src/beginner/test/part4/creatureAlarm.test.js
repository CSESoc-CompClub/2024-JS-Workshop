import { expect, test } from "vitest";
import { creatureAlarm } from "../../beginner.js";

test("creatureAlarm", () => {
  expect(creatureAlarm('ghost')).toBe('Scary!');
  expect(creatureAlarm('vampire')).toBe('Dangerous!');
  expect(creatureAlarm('witch')).toBe('Run away!');
  expect(creatureAlarm('banshee')).toBe('Loud!');
  expect(creatureAlarm('dhampir')).toBe('Help! Unknown!');

});