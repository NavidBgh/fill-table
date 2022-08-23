import React from "react";
import styles from "./button.module.scss";

export const Button = ({
  title = "",
  color = "primary",
  onClick = () => {},
}) => {
  return (
    <div className={styles.button} onClick={() => onClick()}>
      {title}
    </div>
  );
};
