import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

interface IControl {
  label: string;
  ingredientType: string;
}

const controls: IControl[] = [
  { label: "Lettuce", ingredientType: "salad" },
  { label: "Bacon", ingredientType: "bacon" },
  { label: "Cheese", ingredientType: "cheese" },
  { label: "Meat", ingredientType: "meat" }
];

interface IProps {
  ingredientAdded: Function;
  ingredientRemoved: Function;
  disabled: { [p: string]: boolean };
  currentPrice: number;
  purchasable: boolean;
  ordered: () => void;
}

const buildControls: React.SFC<IProps> = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current price: <strong>{props.currentPrice.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.ingredientType)}
          removed={() => props.ingredientRemoved(ctrl.ingredientType)}
          disabled={props.disabled[ctrl.ingredientType]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        Order now
      </button>
    </div>
  );
};

export default buildControls;
