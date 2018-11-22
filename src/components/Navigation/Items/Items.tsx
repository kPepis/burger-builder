import React from "react";
import styles from "./Items.module.css";
import NavItem from "./Item/Item";

const items: React.SFC = () => {
  return (
    <ul className={styles.NavItems}>
      <NavItem link="/" active>Burger Builder</NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  );
};

export default items;
