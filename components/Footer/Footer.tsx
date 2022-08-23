import React from "react";
import { Container } from "../Container";
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__section}>
          <div>Software Version</div>
          <div>Example Text</div>
        </div>
      </Container>
    </footer>
  );
};
