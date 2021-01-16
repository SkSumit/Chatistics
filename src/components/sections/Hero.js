import React, { useContext, useState } from "react";
import html2pdf from "html2pdf.js";
import { FileContext } from "../../App";
import axios from "axios";
import Section from "../common/Section";
import Input from '../Input'
export default function Hero() {
  const context = useContext(FileContext);
  const [uploadFile, setUploadFile] = useState(null);
  const onFileChange = async (e) => {
    setUploadFile(e.target.files[0]);
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

  const sendFile = (e) => {
    e.preventDefault();
    if (uploadFile) {
      console.log(uploadFile);
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
      console.log("NO!");
    }
  };

  console.log("up", uploadFile);
  return (
    <Section
      variation={"is-medium is-primary pb-3"}
      containerVariant={" "}
      noBox={true}
    >
      <h1 className="title is-1">
        <i className="fab fa-whatsapp fa-spin" /> Chatistics
      </h1>
      <h1 className="subtitle is-3">WhatsApp chat analytics and insights</h1>
      
    </Section>
  );
}
