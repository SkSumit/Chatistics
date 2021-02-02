import React, { useState } from "react";
import Section from "./common/Section";
import { postFile } from "../api/api";
import { fileExtensionValidation } from "../api/apiUtils";
import DownloadBtn from "./DownloadBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload  } from '@fortawesome/free-solid-svg-icons'

export default function Input({ setLoader, setAxiosError,showDownloadBtn, setShowDownloadBtn }) {
  const [uploadFile, setUploadFile] = useState(null);
 
  const [error, setError] = useState({
    fileError: { error: false, message: "" },
    axiosError: { error: false, message: "" },
  });
  console.log("showDownloadBtn", showDownloadBtn)

  const onFileChange = async (e) => {
    if (e.target.files[0]) {
      try {
        fileExtensionValidation(e.target.files[0]);
      } catch (error) {
        return setError({
          ...error,
          fileError: { error: true, message: error.message },
        });
      }
      setError({
        ...error,
        fileError: { error: false, message: error.message },
      });
      setUploadFile(e.target.files[0]);
    } else {
      return setError({
        ...error,
        fileError: { error: true, message: "error.message" },
      });
    }
  };

  const sendFile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", uploadFile);
      setLoader(true);
      const result = await postFile(formData);
      console.log(result);
      setShowDownloadBtn(true);
      setLoader(false);
    } catch (error) {
      setAxiosError(error);
      setLoader(false);
    }
  };

  return (
    <Section containerVariant={"bg-white mt-100 py-6"}>
      {showDownloadBtn ? (
        <DownloadBtn />
      ) : (
        <>
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
                      <FontAwesomeIcon icon={faUpload}/>
                      </span>
                    </span>
                    <span
                      className={` ${
                        error.fileError.error ? "has-text-danger" : ""
                      } file-name is-size-5-desktop`}
                    >
                      {uploadFile && uploadFile.name
                        ? uploadFile.name
                        : error.fileError.error
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
                    disabled={!uploadFile}
                  >
                    Upload
                  </button>
                </p>
                <p className="control is-expanded">
                  <button
                    type="submit"
                    className=" button is-size-5-desktop has-text-primary has-text-weight-semibold  is-fullwidth"
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
                Open Sourced, Always
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
        </>
      )}
    </Section>
  );
}
