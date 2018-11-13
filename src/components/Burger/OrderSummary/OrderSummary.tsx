import React from "react";
import "../../../components/UI/buttons.css";

interface IProps {
  ingredients: {};
  purchaseCancel: () => void;
  purchaseContinue: () => void;
  totalPrice: number;
}

const OrderSummary: React.SFC<IProps> = props => {
  let ingredientSummary = Object.entries(props.ingredients).map(entry => {
    const [ingredient, quantity] = entry;
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:{" "}
        {quantity}
      </li>
    );
  });
  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total price: <strong>${props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Proceed with checkout?</p>
      <button className="Button Danger" onClick={props.purchaseCancel}>
        Cancel order
      </button>
      <button className="Button Success" onClick={props.purchaseContinue}>
        Continue
      </button>
    </>
  );
};

export default OrderSummary;
