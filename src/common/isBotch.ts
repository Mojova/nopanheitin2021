import { RollResult } from "components/RollResult/RollResultView";

export const isBotch = (rollResult: RollResult) => {
  return rollResult.successes === 0 && rollResult.ones > 0;
};
