import React from "react";
import { Link } from "react-router-dom";

import Modal from "components/Modal";
import { paths } from "constants";
import useModal from "hooks/useModal";

import "./Header.scss";

const Header = props => {
  const { isOpen, toggleOpen } = useModal();

  return (
    <>
      <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
        hi!
      </Modal>
      <header className="header">
        <div className="header__content">
          <span className="header__logo">
            <Link to={paths.HOME}>Grapher</Link>
          </span>
          <ul className="header__buttons">
            <li className="header__button" onClick={toggleOpen}>
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
