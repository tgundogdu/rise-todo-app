import React from 'react';
import "./modal.scss";
import { createPortal } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

const Modal = ({ children, shown, onClose }) => {
  if (!shown) {
    return null;
  }
  const modal = (
    <div className="o-modal">
      <div className="o-modal-content">{children}</div>
      <div className="o-modal-overlay" onClick={onClose}></div>
    </div>
  );
  const container = document.getElementById("portal-root");
  return createPortal(modal, container);
};
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
