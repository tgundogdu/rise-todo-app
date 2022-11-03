import React from 'react';
import "./divider.scss";

const Divider = ({ size = 20, direction = "vertical" }) => {
  const style = {};
  if (direction === "vertical") {
    style.height = size + "px";
  } else {
    style.width = size + "px";
  }
  return <div className={`o-divider ${direction}`} style={style}></div>;
};

export default Divider;
