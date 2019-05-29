import React from "react";
import { Link } from "react-router-dom";

import { paths } from "constants";

import "./Header.scss";

const Header = props => {
  return (
    <header className="header">
      <div className="header__content">
        <span className="header__logo">
          <Link to={paths.HOME}>Grapher</Link>
        </span>
        <ul className="header__buttons">
          <li className="header__button">Sign in</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
