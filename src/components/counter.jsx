import React from "react";
import First from "./first";
const AnotherComponent = (props) => {
  // You can access the state value using props.stateValue here
  return <First value={props.stateValue} />;
};

export default AnotherComponent;
