import React from "react";
import { Link } from "react-router-dom";

import SignUpModal from "pages/Main/components/SignUpModal";
import { paths } from "constants";
import useModal from "hooks/useModal";

import "./Header.scss";

const Header = props => {
  const { isOpen, toggleOpen } = useModal();

  return (
    <>
      <SignUpModal isOpen={isOpen} toggleOpen={toggleOpen} />
      <header className="header">
        <div className="header__content">
          <span className="header__logo">
            <Link to={paths.HOME}>Grapher</Link>
          </span>
          <ul className="header__buttons">
            <li className="header__button" onClick={toggleOpen}>
              Sign up
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
