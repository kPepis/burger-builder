import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface Iburger {
  ingredients: { [index: string]: number };
  [index: string]: { [index: string]: number };
}

const burger: React.SFC<Iburger> = props => {
  let transformedIngredients: JSX.Element[] = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient ingredientType={igKey} key={igKey + i} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = [<p key={""}>Please start adding ingredients!</p>];
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient ingredientType={"bread-top"} />
      {transformedIngredients}
      <BurgerIngredient ingredientType={"bread-bottom"} />
    </div>
  );
};

export default burger;
