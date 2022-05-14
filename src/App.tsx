import { ThresholdSelector } from "components/ThresholdSelector/ThresholdSelector";
import { MainHeader } from "components/MainHeader/MainHeader";
import { RollControls } from "components/RollControls/RollControls";
import { RollResultView } from "components/RollResult/RollResultView";
import { RollTable } from "components/RollTable/RollTable";
import React, { useState } from "react";
import "./App.css";

interface AppProps {
  rollDiceFn: (
    amount: number,
    successThreshold: number,
    doubleThreshold: number
  ) => number[];
}

export const App: React.FC<AppProps> = (props) => {
  const { rollDiceFn } = props;
  const [roll, setRoll] = useState<number[]>([]);
  const [doubleThreshold, setDoubleThreshold] = useState(10);
  const [successThreshold, setSuccessThreshold] = useState(7);

  const doRoll = (dice: number) => {
    setRoll(rollDiceFn(dice, successThreshold, doubleThreshold));
  };

  return (
    <div className="App">
      <MainHeader>Exalted-nopanheitin</MainHeader>
      <ThresholdSelector
        threshold={successThreshold}
        min={4}
        name={"success"}
        onChange={setSuccessThreshold}
      >
        Onnistuminen
      </ThresholdSelector>
      <ThresholdSelector
        threshold={doubleThreshold}
        min={7}
        disableMin={successThreshold}
        name={"double"}
        onChange={setDoubleThreshold}
      >
        Tuplaraja
      </ThresholdSelector>
      <RollControls doRoll={doRoll} />
      <RollResultView
        rolls={roll}
        successThreshold={successThreshold}
        doubleThreshold={doubleThreshold}
      />
      <RollTable
        roll={roll}
        successThreshold={successThreshold}
        doubleThreshold={doubleThreshold}
      />
    </div>
  );
};
