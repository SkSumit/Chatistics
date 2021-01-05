import React from "react";
import herologo from "../img/logo.png";

export default function Hero({ onSubmitFile, onFileChange, file }) {
  console.log(file);
  return (
    <section className="hero is-medium is-primary ">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            <i className="fab fa-whatsapp" /> Chatistics
          </h1>
          <h1 className="subtitle is-3">
            WhatsApp chat analytics and insights
          </h1>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field is-narrow">
                <p className="control  ">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      onChange={onFileChange}
                    />
                    <span className="file-cta" style={{ color: "#25D366" }}>
                      <span className="file-icon">
                        <i className="fas fa-upload " />
                      </span>
                    </span>
                    <span className="file-name">
                      {file && file.filename? file.filename : "Upload Exported Text File"}
                    </span>
                  </label>
                </p>
              </div>
              <div className="field is-grouped">
                <p className="control">
                  <button
                    type="submit"
                    className=" button has-text-primary has-text-weight-semibold "
                  >
                    Upload
                  </button>
                </p>
                <p className="control">
                  <button
                    type="submit"
                    className=" button is-primary is-inverted is-outlined has-text-weight-semibold "
                  >
                    Know More
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="is-flex-direction-row"></div>
        </div>
      </div>
    </section>
  );
}
