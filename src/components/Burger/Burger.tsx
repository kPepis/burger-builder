import React from 'react';
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient ingredientType={"bread-top"}/>
      <BurgerIngredient ingredientType={"cheese"}/>
      <BurgerIngredient ingredientType={"meat"}/>
      <BurgerIngredient ingredientType={"bread-bottom"}/>
    </div>
  );
};

export default burger;
