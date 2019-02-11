import React from "react";

import "./ArrowLegend.css";

const ArrowLegend = props => {
  const { edgeStyles } = props;

  return (
    <div className="arrow-legend row">
      {edgeStyles.map(style => (
        <div key={`legend-${style.type}`} className="d-flex col-6">
          <div className="color" style={{ backgroundColor: style.color }} />
          <div className="type">{style.type}</div>
        </div>
      ))}
    </div>
  );
};

export default ArrowLegend;
