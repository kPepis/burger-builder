import React, { Component } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

interface IProps {
  display: boolean;
  modalClosed: () => void;
}

class Modal extends Component<IProps> {
  shouldComponentUpdate(nextProps: Readonly<IProps>) {
    return nextProps.display !== this.props.display;
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.display} clicked={this.props.modalClosed} />
        <div
          className={[
            classes.Modal,
            this.props.display
              ? classes.ModalDisplayTrue
              : classes.ModalDisplayFalse
          ].join(" ")}
        >
          <button
            className={classes.CloseButton}
            onClick={this.props.modalClosed}
          >
            X
          </button>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
