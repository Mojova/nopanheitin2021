import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import React, { useState } from "react";
import classes from "components/RollControls/RollControls.module.scss";

interface RollControlsProps {
  doRoll: (dice: number) => void;
}

const getButtonText = (dice: number) => {
  if (dice === 1) {
    return `Heitä 1 noppa`;
  }
  if (dice > 1) {
    return `Heitä ${dice} noppaa`;
  }
  return "Heitä noppia";
};

export const RollControls: React.FC<RollControlsProps> = (props) => {
  const { doRoll } = props;
  const [dice, setDice] = useState<number>(1);

  const onClick = () => {
    doRoll(dice);
  };

  return (
    <div className={classes.container}>
      <Input id="rolls" value={dice} onChange={setDice}>
        Noppien määrä
      </Input>
      <Button onClick={onClick} className={classes.button}>
        {getButtonText(dice)}
      </Button>
    </div>
  );
};
