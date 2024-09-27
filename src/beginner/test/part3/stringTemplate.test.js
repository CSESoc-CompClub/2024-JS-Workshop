import { expect, test } from "vitest";
import { spookyMessage } from "../../beginner.js";

test("spookyMessage", () => {
    expect(spookyMessage("vampire")).toBe("Run! There's a vampire near you!");
    expect(spookyMessage("werewolf")).toBe("Run! There's a werewolf near you!");
    expect(spookyMessage("")).toBe("Run! There's a  near you!");
});