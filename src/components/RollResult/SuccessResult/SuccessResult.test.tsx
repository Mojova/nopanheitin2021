import { render, screen } from "@testing-library/react";
import { SuccessResult } from "components/RollResult/SuccessResult/SuccessResult";
import { RollResult } from "../RollResultView";

describe("SuccessResult", () => {
  it("renders successful rolls", () => {
    const rollResult: RollResult = {
      successes: 3,
      successesWithoutDoubles: 2,
      ones: 1,
    };
    render(<SuccessResult rollResult={rollResult} />);
    expect(screen.getByText("onnistumista!")).toBeVisible();
    expect(screen.getByText("vahinkoa!")).toBeVisible();
  });
  it("doesn’t render botches", () => {
    const rollResult: RollResult = {
      successes: 0,
      successesWithoutDoubles: 0,
      ones: 2,
    };
    render(<SuccessResult rollResult={rollResult} />);
    expect(screen.queryByText("onnistumista!")).not.toBeInTheDocument();
    expect(screen.queryByText("onnistuminen!")).not.toBeInTheDocument();
  });
});
