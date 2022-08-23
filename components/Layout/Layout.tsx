import React from "react";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";

export const Layout = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
};
