import React from "react";

import "./Header.scss";

const Header = props => {
  return (
    <header className="header">
      <div className="header__content">
        <span className="header__logo">Grapher</span>
        <ul className="header__buttons">
          <li className="header__button">Sign in</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
