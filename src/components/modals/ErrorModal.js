import React, { useContext } from "react";
import Modal from "../common/Modal";
import { FileContext } from "../../App";


const ErrorModal = () => {
    const context = useContext(FileContext);
  return (
    <Modal error={ context.axiosError} setError = { context.setAxiosError} >
      <div className="notification is-danger is-light mx-3">
        <h1 className="title"> Err, Congratualtions 🎉 <br/> you broke the internet... </h1> 
        <h3 className="subtitle"> Don't worry, try again in sometime </h3>
      </div>
    </Modal>
  );
};

export default ErrorModal;
