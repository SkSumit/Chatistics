import React from "react";

const Modal = ({ error, setError, children }) => {

  return (
    <div className={`modal ${error ? "is-active" : ""} `}>
      <div className="modal-background" onClick={() => setError(false)}></div>
      <div class="modal-content  mx-2">{children}</div>
    </div>
  );
};

export default Modal;
