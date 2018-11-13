import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

interface IState {
  ingredients: {
    [index: string]: number;
  };
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
}

const INGREDIENT_PRICES: IState["ingredients"] = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component<{}, IState> {
  constructor() {
    super({});
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false
    };
  }

  updatePurchaseState(ingredients: { [p: string]: number }) {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((previousValue, currentValue) => previousValue + currentValue);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (ingredientType: string): void => {
    const oldCount = this.state.ingredients[ingredientType];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[ingredientType] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[ingredientType];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (ingredientType: string): void => {
    const oldCount = this.state.ingredients[ingredientType];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[ingredientType] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[ingredientType];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("Proceed to buy");
  };

  render() {
    const ingredientsCopy = { ...this.state.ingredients };
    let disabledInfo: { [p: string]: boolean } = {};

    for (const key in ingredientsCopy) {
      disabledInfo[key] = ingredientsCopy[key] <= 0;
    }

    return (
      <>
        <Modal
          display={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          currentPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
