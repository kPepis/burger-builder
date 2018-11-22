import React from "react";

interface IProps {
  clicked: () => void;
}

const drawerToggle: React.SFC<IProps> = props => {
  return (
    <>
      <div onClick={props.clicked}>Menu</div>
    </>
  );
};

export default drawerToggle;
