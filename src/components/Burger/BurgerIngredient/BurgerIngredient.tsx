import React, { Component } from "react";
import classes from "./BurgerIngredient.module.css";

interface IBurgerIngredient {
  ingredientType: string;
}

class BurgerIngredient extends Component<IBurgerIngredient> {
  public static defaultProps: Partial<IBurgerIngredient> = {
    ingredientType: "null"
  };

  render() {
    console.log(classes);
    const ingredientsList: { [index: string]: React.ReactElement<string> } = {
      "bread-bottom": <div className={classes.BreadBottom} />,
      "bread-top": (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      ),
      meat: <div className={classes.Meat} />,
      cheese: <div className={classes.Cheese} />,
      bacon: <div className={classes.Bacon} />,
      salad: <div className={classes.Salad} />
    };

    return ingredientsList[this.props.ingredientType];
  }
}

export default BurgerIngredient;
