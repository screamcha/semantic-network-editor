import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "pages/Main";

import "./App.scss";

const App = props => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path={"/"} component={Main} />
      </Switch>
    </div>
  );
};

export default App;
