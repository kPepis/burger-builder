import React from "react";
import classes from "./Backdrop.module.css";

interface IProps {
  show?: boolean;
  clicked: () => void;
}

const backdrop: React.SFC<IProps> = props => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked} />
  ) : null;
};

backdrop.defaultProps = {
  show: true
};

export default backdrop;
