import { rollDie } from "common/rollDie";
import { curry } from "lodash";

export const _rollDice = (rollDieFn: () => number, amount: number) => {
  const rolls: number[] = [];
  for (let i = 0; i < amount; i++) {
    rolls.push(rollDieFn());
  }
  return rolls;
};

export const rollDice: (amount: number) => number[] = curry(_rollDice)(rollDie);
