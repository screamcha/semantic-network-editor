import React from "react";
import ReactDOM from "react-dom";

import { ROOT_ID } from "constants";
import { setPageScroll } from "utils";

import "./Modal.scss";

const Modal = ({ isOpen, toggleOpen, children }) => {
  const modalRef = React.useRef(null);
  React.useEffect(() => {
    setPageScroll(!isOpen);

    return () => setPageScroll(false);
  });
  const handleClickOutside = ({ target }) => {
    if (!modalRef.current.contains(target)) {
      toggleOpen();
    }
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal-wrapper" onClick={handleClickOutside}>
          <div className="modal" ref={modalRef}>
            <div className="modal__content">{children}</div>
          </div>
        </div>,
        document.getElementById(ROOT_ID)
      )
    : null;
};

export default Modal;
