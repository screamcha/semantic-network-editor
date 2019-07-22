import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/Header";
import Main from "pages/Main";
import Editor from "pages/Editor";

import { paths } from "constants";

import "./App.scss";

const App = props => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path={paths.HOME} exact={true} component={Main} />
        <Route path={paths.EDITOR} component={Editor} />
      </Switch>
    </div>
  );
};

export default App;
