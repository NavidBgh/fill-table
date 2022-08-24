import React from "react";
import styles from "./button.module.scss";

export const Button = React.memo(
  ({ title = "", color = "primary", onClick = () => {} }) => {
    return (
      <div
        className={`${styles.button} ${styles[color]}`}
        onClick={() => onClick()}
      >
        {title}
      </div>
    );
  }
);