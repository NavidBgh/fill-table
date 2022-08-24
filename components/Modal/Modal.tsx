import React from "react";
import { Button } from "../Button";
import styles from "./modal.module.scss";

export const Modal = ({
  show = false,
  onClose = () => {},
  onConfirm = () => {},
}) => {
  return (
    <div className={`${styles.modal} ${show && styles.active}`}>
      <div className={styles.modal__box}>
        <div className={styles.modal__title}>
          Are you sure about deleting item?
        </div>
        <div className={styles.modal__actions}>
          <Button color="dark" title="CANCEL" onClick={() => onClose()} />
          <Button color="warning" title="DELETE" onClick={() => onConfirm()} />
        </div>
      </div>
    </div>
  );
};
