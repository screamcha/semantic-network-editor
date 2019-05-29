import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/Header";
import Main from "pages/Main";

import { paths } from "constants";

import "./App.scss";

const App = props => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path={paths.HOME} component={Main} />
      </Switch>
    </div>
  );
};

export default App;
