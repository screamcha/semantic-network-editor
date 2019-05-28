import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "pages/Main";

import "./App.scss";

const App = props => {
  return (
    <section className="main-layout">
      <Switch>
        <Route path={"/"} component={Main} />
      </Switch>
    </section>
  );
};

export default App;
