import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <>
        <Burger />
        <div>Build controls for the burger</div>
      </>
    );
  }
}

export default BurgerBuilder;
