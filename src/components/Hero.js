import React from "react";

export default function Hero({ onSubmitFile, onFileChange, file }) {
    console.log(file)
  return (
    <section className="hero is-large is-light is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Chatistics</h1>
          <h1 className="subtitle is-3">
            WhatsApp chat analytics and insights
          </h1>

          <form className="file has-name" onSubmit={onSubmitFile}>
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                onChange={onFileChange}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
              </span>
              <span className="file-name">
                {file ? file.filename : "Upload Exported Text File"}
              </span>
            </label>
            <button type="submit" className=" ml-2 button is-primary ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
