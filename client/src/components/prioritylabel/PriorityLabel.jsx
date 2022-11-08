import React from "react";
import "./prioritylabel.scss";

const PriorityLabel = ({ priority }) => {
  return (
    <span className="o-priority-label" style={{ color: priority?.color }}>
      <i style={{ backgroundColor: priority?.color }}></i>
      {priority?.label}
    </span>
  );
};

export default PriorityLabel;
