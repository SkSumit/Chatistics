import React from "react";
import Modal from "../common/Modal";

const ErrorModal = ({ error, setError }) => {
  return (
    <Modal error={error} setError={setError}>
      <div className="notification is-danger is-light mx-3">
        <h1 className="title">
        
          Err, Congratualtions 🎉 <br /> you broke the internet...{" "}
        </h1>
        <h3 className="subtitle">
      
          Something went wrong, try again in sometime{" "}
        </h3>
      </div>
    </Modal>
  );
};

export default ErrorModal;
