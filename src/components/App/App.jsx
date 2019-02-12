import React from "react";
import Header from "../Header/Header.jsx";
import GraphPage from "../GraphPage/GraphPage.jsx";

import "./App.scss";

const App = props => {
  return (
    <section className="main-layout">
      <Header />
      <GraphPage />
    </section>
  );
};

export default App;
