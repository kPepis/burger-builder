import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css";

const logo: React.SFC = () => {
  return (
    <div className={styles.Logo}>
      <img src={burgerLogo} alt="BurgerBuilder logo" />
    </div>
  );
};

export default logo;