import React from "react";
import classes from "./Layout.module.css";

const layout: React.SFC = props => {
  return (
    <>
      <div>Toolbar, side drawer, backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default layout;
