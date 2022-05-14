import React from "react";
import classes from "components/MainHeader/MainHeader.module.scss";
import { HasChildrenProps } from "../../common/types";

export const MainHeader: React.FC<HasChildrenProps> = (props) => {
  const { children } = props;
  return (
    <div className={classes.container}>
      <h1>{children}</h1>
    </div>
  );
};
