import { isBotch } from "common/isBotch";
import { RollResult } from "../components/RollResult/RollResultView";

describe("isBotch", () => {
  it("recognizes botches", () => {
    const result: RollResult = {
      successesWithoutDoubles: 0,
      successes: 0,
      ones: 2,
    };
    expect(isBotch(result)).toBeTruthy();
  });
  it("recognizes non-botches", () => {
    const result: RollResult = {
      successesWithoutDoubles: 0,
      successes: 1,
      ones: 2,
    };
    expect(isBotch(result)).toBeFalsy();
  });
});
