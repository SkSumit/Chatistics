import React from "react";
import Modal from "../common/Modal";

const KnowMoreModal = ({ showModal, setShowModal }) => {
  return (
    <Modal error={showModal} setError={setShowModal}>
      <>
        <header className="modal-card-head">
          <p className="modal-card-title">
            How to?
          </p>
        </header>
        <div className="modal-card-body">
          <div className="box bg-light-green">
            <h1 className="title">Export chat history</h1>
            <div className="content">
              <h5>
                You can use the export chat feature to export a copy of the chat
                history from an individual or group chat.
              </h5>

              <ul className="ml-2">
                <li>Open the individual or group chat.</li>
                <li>
                  Tap More options `{">"}` More `{">"}` Export chat.
                </li>
                <li>
                  Export without media. An email
                  will be composed with your chat history attached as a .txt
                  document.
                </li>
              </ul>

              <blockquote>
                Note: If you're in Germany, you might have to update WhatsApp
                before you can use the export chat feature. <br/>If you choose to
                attach media, the most recent media sent will be added as
                attachments.<br/> When exporting with media, you can send up to
                10,000 latest messages.<br/> Without media, you can send 40,000
                messages. These constraints are due to maximum email sizes.
              </blockquote>
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default KnowMoreModal;
