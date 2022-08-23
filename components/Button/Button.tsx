import React from "react";
import styles from "./button.module.scss";

export const Button = ({
  title = "",
  color = "primary",
  onClick = () => {},
}) => {
  console.log(styles);
  return (
    <div
      className={`${styles.button} ${styles[color]}`}
      onClick={() => onClick()}
    >
      {title}
    </div>
  );
};
