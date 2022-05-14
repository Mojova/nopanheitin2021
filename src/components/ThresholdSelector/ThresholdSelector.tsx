import { ThreshholdInput } from "components/ThresholdInput/ThresholdInput";
import React, { ChangeEvent, PropsWithChildren, useEffect } from "react";
import classes from "components/ThresholdSelector/ThresholdSelector.module.scss";

interface DoubleSelectorProps {
  threshold: number;
  disableMin?: number;
  onChange: (doubleThreshold: number) => void;
  min: number;
  name: string;
}

export const ThresholdSelector: React.FC<
  PropsWithChildren<DoubleSelectorProps>
> = (props) => {
  const { children, threshold, min, disableMin = 0, name, onChange } = props;
  const internalOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Number.parseInt(event.target.value, 10));
  };
  useEffect(() => {
    if (disableMin > threshold) {
      onChange(disableMin);
    }
  });
  const inputs = [];
  for (let i = min; i < 11; i++) {
    inputs.push(i);
  }
  return (
    <fieldset className={classes.container}>
      <legend className={classes.legend}>{children}</legend>
      {inputs.map((value) => (
        <ThreshholdInput
          key={value}
          threshhold={threshold}
          name={name}
          disabled={value < disableMin}
          onChange={internalOnChange}
          value={value}
        />
      ))}
    </fieldset>
  );
};
