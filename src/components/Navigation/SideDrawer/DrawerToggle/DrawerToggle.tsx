import React from "react";
import styles from "./DrawerToggle.module.css";

interface IProps {
  clicked: () => void;
}

const drawerToggle: React.SFC<IProps> = props => {
  return (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default drawerToggle;
