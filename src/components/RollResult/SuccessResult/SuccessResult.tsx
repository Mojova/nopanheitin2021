import { isBotch } from "common/isBotch";
import { ResultText } from "components/RollResult/ResultText/ResultText";
import { RollResult } from "components/RollResult/RollResultView";
import React from "react";

interface SuccessResultProps {
  rollResult: RollResult;
}

export const SuccessResult: React.FC<SuccessResultProps> = (props) => {
  const { rollResult } = props;
  if (isBotch(rollResult)) {
    return null;
  }
  return (
    <span>
      <ResultText
        amount={rollResult.successes}
        singular={"onnistuminen"}
        plural={"onnistumista"}
      />
      &nbsp;
      <ResultText
        amount={rollResult.successesWithoutDoubles}
        singular={"vahinko"}
        plural={"vahinkoa"}
      />
    </span>
  );
};
