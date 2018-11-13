import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

interface IProps {
  display: boolean;
  modalClosed: () => void;
}

const modal: React.SFC<IProps> = props => {
  return (
    <>
      <Backdrop show={props.display} closeBackdrop={props.modalClosed} />
      <div
        className={[
          classes.Modal,
          props.display ? classes.ModalDisplayTrue : classes.ModalDisplayFalse
        ].join(" ")}
      >
        <button className={classes.CloseButton} onClick={props.modalClosed}>X</button>
        {props.children}
      </div>
    </>
  );
};

export default modal;
