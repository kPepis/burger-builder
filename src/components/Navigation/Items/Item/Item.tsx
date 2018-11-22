import React from "react";
import styles from "./Item.module.css";

interface IProps {
  link: string;
  active?: boolean;
}

const item: React.SFC<IProps> = props => {
  return (
    <li className={styles.NavItem}>
      <a href={props.link} className={props.active ? styles.active : undefined}>
        {props.children}
      </a>
    </li>
  );
};

item.defaultProps = {
  active: false
};

export default item;
