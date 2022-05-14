import { _rollDice } from "common/rollDice";

describe("rollDice", () => {
  it("rolls a die", () => {
    const mockRollDie = jest.fn().mockReturnValue(7);
    const result = _rollDice(mockRollDie, 1);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(7);
  });
  it("rolls many dice", () => {
    let roll = 1;
    const mockRollDie = jest.fn().mockImplementation(() => {
      return roll++;
    });
    const result = _rollDice(mockRollDie, 10);
    expect(result.length).toBe(10);
  });
});
