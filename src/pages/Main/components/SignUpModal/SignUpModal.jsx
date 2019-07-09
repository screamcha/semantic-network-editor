import React from "react";

import Modal from "components/Modal";
import SignUp from "pages/Main/components/SignUp";

const SignUpModal = ({ isOpen, toggleOpen }) => (
  <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
    <SignUp />
  </Modal>
);

export default SignUpModal;
