import React from "react";

import "./Graph.css";

const Graph = props => {
  const { getRootRef } = props;

  return (
    <section className="graph-container">
      <div id="cy" ref={getRootRef} />
    </section>
  );
};

export default Graph;
