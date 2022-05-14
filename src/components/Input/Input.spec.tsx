import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "components/Input/Input";

describe("Input", () => {
  const onChange = jest.fn();
  it("is an input", () => {
    render(
      <Input id="dice" value={5} onChange={onChange}>
        Dice
      </Input>
    );
    const input = screen.getByLabelText("Dice");
    expect(input).toHaveValue("5");
    userEvent.type(input, "12");
    expect(onChange).toHaveBeenCalled();
    userEvent.clear(input);
    userEvent.type(input, "ab");
    userEvent.tab();
    userEvent.clear(input);
    userEvent.type(input, "12+12");
    userEvent.tab();
    expect(input).toBeValid();
  });
});
