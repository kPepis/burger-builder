import React, { Component } from "react";
import "../../../components/UI/buttons.css";

interface IProps {
  ingredients: {};
  purchaseCancel: () => void;
  purchaseContinue: () => void;
  totalPrice: number;
}

class OrderSummary extends Component<IProps> {
  render() {
    const ingredientSummary = Object.entries(this.props.ingredients).map(
      entry => {
        const [ingredient, quantity] = entry;
        return (
          <li key={ingredient}>
            <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:{" "}
            {quantity}
          </li>
        );
      }
    );

    return (
      <>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total price: <strong>${this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Proceed with checkout?</p>
        <button className="Button Danger" onClick={this.props.purchaseCancel}>
          Cancel order
        </button>
        <button
          className="Button Success"
          onClick={this.props.purchaseContinue}
        >
          Continue
        </button>
      </>
    );
  }
}

export default OrderSummary;
