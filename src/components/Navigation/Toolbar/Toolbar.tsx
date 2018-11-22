import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavItems from "../Items/Items";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

interface IProps {
  drawerToggleClicked: () => void;
}

const toolbar: React.SFC<IProps> = props => {
  return (
    <>
      <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
          <NavItems />
        </nav>
      </header>
    </>
  );
};

export default toolbar;
