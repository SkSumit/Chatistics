import React, { useContext, useState } from "react";
import html2pdf from "html2pdf.js";

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const download = async () => {
    setLoading(true);
   
    var element = document.body;
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
    setLoading(false);
  };

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <button onClick={download} class={`button is-primary is-large is-fullwidth ${loading ? 'is-loading': ''} `}  disabled={loading}>
            Download Statistics
          </button>
        </div>
      </div>
    </section>
  );
}
