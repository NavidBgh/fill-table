import React from "react";
import styles from "./card.module.scss";

export const Card = ({ children, title = "" }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>{title}</div>
      {children}
    </div>
  );
};
