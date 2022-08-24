import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Container } from "../Container";
import styles from "./navigation.module.scss";

const navigationItems = ["ITEM 05", "ITEM 04", "ITEM 03", "ITEM 02", "ITEM 01"];

export const Navigation = () => {
  const [activeItem] = useState("ITEM 01");
  return (
    <nav className={styles.navigation}>
      <Container>
        <div className={styles.navigation__section}>
          <Image src="/logo.png" width={40} height={54} />
          <div className={styles.navigation__menu}>
            {navigationItems.map((navItem, index) => (
              <Link key={index} href="#">
                <a
                  className={`${styles.navigation__item} ${
                    navItem === activeItem && styles.active
                  }`}
                >
                  {navItem}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
};
