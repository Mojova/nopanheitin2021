import { render, screen } from "@testing-library/react";
import { BotchResult } from "components/RollResult/BotchResult/BotchResult";
import { RollResult } from "../RollResultView";

describe("BotchResult", () => {
  it("renders botches", () => {
    const rollResult: RollResult = {
      successes: 0,
      successesWithoutDoubles: 0,
      ones: 1,
    };
    render(<BotchResult rollResult={rollResult} />);
    expect(screen.getByText("Botch!")).toBeVisible();
    expect(screen.getByText("1")).toBeVisible();
    expect(screen.getByText("ykkönen!")).toBeVisible();
  });
  it("doesn’t render other results", () => {
    const rollResult: RollResult = {
      successes: 1,
      successesWithoutDoubles: 1,
      ones: 1,
    };
    render(<BotchResult rollResult={rollResult} />);
    expect(screen.queryByText("Botch!")).not.toBeInTheDocument();
  });
});
