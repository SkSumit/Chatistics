import React from "react";
import Modal from "../common/Modal";

const FeedbackModal = () => {
  return (
    <Modal>
      <>
        <header className="modal-card-head">
          <p className="modal-card-title">Hold on it's downloading</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <div className="modal-card-body">
          <div className="box bg-light-green">
            <h1 className="title">Feedback</h1>
            <h2 className="subtitle">
              We don't save data, we'd love to know what you think
            </h2>
          </div>
          <div className="is-flex is-justify-content-center">
            <Rate allowHalf={true} style={{ fontSize: "64px" }} />
          </div>
        </div>
      </>
    </Modal>
  );
};

export default FeedbackModal;
