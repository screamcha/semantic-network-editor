import React from "react";

import "./Main.scss";

const Main = props => {
  return (
    <section className="main-page">
      <div className="main-page__content">
        <div className="main-page__section hero-section">
          <div className="hero-section__content">
            <h1 className="hero-section__title">Grapher</h1>
            <h3 className="hero-section__subtitle">Manage your graphs with comfort</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
