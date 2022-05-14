import React from "react";

interface ResultTextProps {
  amount: number;
  singular: string;
  plural: string;
}

export const ResultText: React.FC<ResultTextProps> = (props) => {
  const { amount, singular, plural } = props;
  return (
    <span>
      <strong>{amount}</strong> {amount === 1 ? `${singular}!` : `${plural}!`}
    </span>
  );
};
