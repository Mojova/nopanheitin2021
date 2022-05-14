import { stringCalculator } from "common/stringCalculator";

describe("StringCalculator", () => {
  it("returns result when no calculation", () => {
    expect(stringCalculator("123")).toBe(123);
  });
  it("calculates simple strings", () => {
    expect(stringCalculator("1+1")).toBe(2);
  });
  it("calculates complex strings", () => {
    expect(stringCalculator("1 + 102 - 23 - 3 - 4   + 34")).toBe(107);
    expect(
      stringCalculator("5 + 346 - 123 +345 -6  - 4 + 3 -3 + 0  + 34")
    ).toBe(597);
  });
  it("return NaN for malformed strings", () => {
    expect(stringCalculator("1+1-")).toBeNaN();
    expect(stringCalculator("1+a")).toBeNaN();
    expect(stringCalculator("foobar")).toBeNaN();
    expect(stringCalculator("1.1+2.2")).toBeNaN();
    expect(stringCalculator("5a3")).toBeNaN();
  });
});
