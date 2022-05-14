import { BotchResult } from "components/RollResult/BotchResult/BotchResult";
import classes from "components/RollResult/RollResult.module.scss";
import { SuccessResult } from "components/RollResult/SuccessResult/SuccessResult";
import { reduce } from "lodash";
import React from "react";

export interface RollResult {
  successes: number;
  successesWithoutDoubles: number;
  ones: number;
}

interface RollResultProps {
  rolls: number[];
  successThreshold: number;
  doubleThreshold: number;
}

export const RollResultView: React.FC<RollResultProps> = (props) => {
  const { rolls, successThreshold, doubleThreshold } = props;
  if (rolls.length === 0) {
    return null;
  }
  const rollResult: RollResult = {
    successes: calculateSuccesses(rolls, successThreshold, doubleThreshold),
    successesWithoutDoubles: calculateSuccesses(
      rolls,
      successThreshold,
      Number.MAX_SAFE_INTEGER
    ),
    ones: calculateOnes(rolls),
  };
  return (
    <p className={classes.container}>
      <BotchResult rollResult={rollResult} />
      <SuccessResult rollResult={rollResult} />
    </p>
  );
};

const calculateSuccesses = (
  rolls: number[],
  threshold: number,
  doubleLimit: number
) => {
  return reduce(
    rolls,
    (sum, roll) => {
      let rollSuccesses = 0;
      if (roll >= doubleLimit) {
        rollSuccesses += 2;
      } else if (roll >= threshold) {
        rollSuccesses++;
      }
      return sum + rollSuccesses;
    },
    0
  );
};

const calculateOnes = (rolls: number[]) => {
  return reduce(
    rolls,
    (sum, roll) => {
      const isOne = roll === 1;
      return isOne ? ++sum : sum;
    },
    0
  );
};
