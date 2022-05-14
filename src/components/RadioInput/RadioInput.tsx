import React, { ChangeEventHandler, PropsWithChildren } from "react";
import classes from "components/RadioInput/RadioInput.module.scss";

interface RadioInputProps {
  checked: boolean;
  disabled: boolean;
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: number;
}

export const RadioInput: React.FC<PropsWithChildren<RadioInputProps>> = (
  props
) => {
  const { checked, disabled, label, name, onChange, value } = props;
  const id = `id-${label}`;
  return (
    <span className={classes.container}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={"radio"}
        name={name}
        value={value.toLocaleString()}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
    </span>
  );
};
