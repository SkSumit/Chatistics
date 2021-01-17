import React, { useContext, useState } from "react";
import html2pdf from "html2pdf.js";
import { FileContext } from "../App";
import axios from "axios";
import Section from "./common/Section";

export default function Input() {
  const context = useContext(FileContext);
  const [uploadFile, setUploadFile] = useState(null);
  const [error, setError] = useState(false);
  const onFileChange = async (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setError(false);
      setUploadFile(e.target.files[0]);
    } else {
      setError(true);
    }
  };
  const download = async () => {
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

  const sendFile = (e) => {
    e.preventDefault();
    if (uploadFile) {
      console.log(uploadFile);
      setError(false);
      if (
        uploadFile.name.slice(
          ((uploadFile.name.lastIndexOf(".") - 1) >>> 0) + 2
        ) !== "txt"
      ) {
        alert("Wrong File SISTA");
      } else {
        context.setLoader(true);
        setInterval(() => {
          context.setLoader(false);
        }, 3000);
      }
    } else {
      setError(true);
    }
  };
  return (
    <Section containerVariant={"bg-white mt-100 py-6"}>
      <div className="field is-horizontal is-justify-content-center">
        <div className="field-body is-justify-content-center ">
          <div className="field is-narrow">
            <p className={`control file has-name`}>
              <label className="file-label">
                <input
                  className="file-input input  is-size-5-desktop"
                  type="file"
                  onChange={onFileChange}
                  accept=".txt"
                />
                <span
                  className="file-cta is-size-5-desktop"
                  style={{ color: "#25D366" }}
                >
                  <span className="file-icon">
                    <i className="fas fa-upload " />
                  </span>
                </span>
                <span
                  className={` ${
                    error ? "has-text-danger" : ""
                  } file-name is-size-5-desktop`}
                >
                  {uploadFile && uploadFile.name
                    ? uploadFile.name
                    : error
                    ? "Please select a text file"
                    : "Upload Exported Text File"}
                </span>
              </label>
            </p>
          </div>
          <div className="field is-grouped is-narrow">
            <p className="control is-expanded">
              <button
                type="submit"
                className=" button is-size-5-desktop has-text-primary has-text-weight-semibold is-fullwidth"
                onClick={sendFile}
              >
                Upload
              </button>
            </p>
            <p className="control is-expanded">
              <button
                type="submit"
                className=" button is-size-5-desktop has-text-primary has-text-weight-semibold  is-fullwidth"
                onClick={download}
              >
                Know More
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="columns is-centered mt-2 is-hidden-touch">
        <div className="column is-narrow">
          <h6 className="subtitle is-6 has-text-centered  ">
            We don't store your chats,
          </h6>
        </div>
        <div className="column is-narrow">
          <h6 className="subtitle is-6 has-text-centered  has-text-weight-semibold bg-light-green py-2 px-2 rotateTXT">
            we aren't Facebook.
          </h6>
        </div>
        <div className="column is-narrow">
          <h6 className="subtitle is-6 has-text-centered  ">
            PS You can check the
            <span className="underline "> code over here </span>
          </h6>
        </div>
      </div>
      <div className="subtitle is-6 has-text-centered is-hidden-desktop mt-4 ">
        <h6 className="has-text-weight-semibold bg-light-green py-2 rotateTXT-2">
          we aren't Facebook.
        </h6>
        <br />
        <h6 className="subtitle is-6 has-text-centered  ">
          We don't store your chats, you can check the
          <span className="underline "> code over here </span>
        </h6>
      </div>
    </Section>
  );
}
