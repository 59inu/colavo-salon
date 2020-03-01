import React, { Fragment, ReactElement } from "react";

interface IProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: Array<ReactElement>;
}

const Modal = ({ children, isOpen, onClose, title }: IProps) => {
  return isOpen ? (
    <Fragment>
      <div className="modal-overlay" />
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__content">{children}</div>
        <div className="modal__button-container">
          <button onClick={onClose}> 확인 </button>
        </div>
      </div>
    </Fragment>
  ) : null;
};
export default Modal;
