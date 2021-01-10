import React, { useContext, useState } from "react";
import html2pdf from "html2pdf.js";
import { FileContext } from "../../App";
import axios from "axios";

export default function Hero({ onSubmitFile}) {
  const context = useContext(FileContext);

  const [file, setFile] = useState(null);

  // const onSubmitFile = (event) => {
  //   event.preventDefault();
  //   setFile(data);
  //   // readFile(file);
  // };


  const onFileChange = async(e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    const dataFile = e.target.files[0];
    const result = await axios.post('http://localhost:5000/post',dataFile)
    console.log(result)

  };
  const sendFile = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
  };


  const download = async () => {
    console.log("download");

    var element = document.getElementById("root");
    const getOptions = (filename, element) => {
      let opt = {
        margin: 0,
        filename: filename + ".pdf",
        image: { type: "jpeg", quality: 0.7 },
        html2canvas: { scale: 2, foreignObjectRendering: true },
        jsPDF: {
          unit: "px",
          format: [
            element.getBoundingClientRect().height,
            element.getBoundingClientRect().width,
          ],
          orientation: "portrait",
          hotfixes: ["px_scaling"],
        },
      };
      return opt;
    };
    await html2pdf().from(element).set(getOptions("filename", element)).save();
  };
  return (
    <section className="hero is-medium is-primary ">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            <i className="fab fa-whatsapp fa-spin" /> Chatistics
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
                      {file && file.filename
                        ? file.filename
                        : "Upload Exported Text File"}
                    </span>
                  </label>
                </p>
              </div>
              <div className="field is-grouped">
                <p className="control">
                  <button
                    type="submit"
                    className=" button has-text-primary has-text-weight-semibold "
                    onClick={sendFile}
                  >
                    Upload
                  </button>
                </p>
                <p className="control">
                  <button
                    type="submit"
                    className=" button is-primary is-inverted is-outlined has-text-weight-semibold "
                    onClick={download}
                  >
                    Know More
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
