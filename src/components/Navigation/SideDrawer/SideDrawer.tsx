import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../Items/Items";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

interface IProps {
  open: boolean;
  closed: () => void;
}

const sideDrawer: React.SFC<IProps> = props => {
  const attachedClasses = props.open
    ? [styles.SideDrawer, styles.Open]
    : [styles.SideDrawer, styles.Close];

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
