import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from "../Header/Header";
import GraphPage from "../GraphPage/GraphPage";
import Main from '../../pages/Main/Main';

import "./App.scss";

const App = props => {
  return (
    <section className="main-layout">
      <Switch>
        <Route path={'/editor'} component={GraphPage} />
        <Route path={'/'} component={Main} />
      </Switch>
    </section>
  );
};

export default App;
