import React from "react";
import classes from "./Backdrop.module.css";

interface IProps {
  show: boolean;
  closeBackdrop: () => void;
}

const backdrop: React.SFC<IProps> = props => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.closeBackdrop} />
  ) : null;
};

export default backdrop;
