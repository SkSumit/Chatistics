import React, { useState} from "react";
import html2pdf from "html2pdf.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export default function DownloadBtn({filename}) {
  const [loading, setLoading] = useState(false);
  const context = useContext(FileContext);

  const download = async ({filename}) => {
    setLoading(true);

    var element = document.getElementById('root');
    
    const getOptions = (filename, element) => {
      let opt = {
        margin: 0,
        enableLinks:true,
        filename: filename + ".pdf",
        image: { type: "jpeg", quality: 0.7 },
        html2canvas: { scale: 1, foreignObjectRendering: true },
        jsPDF: {
          unit: "px",
          format: [
            element.clientHeight,
            element.clientWidth,
          ],
          orientation: "portrait",
          hotfixes: ["px_scaling"],
        },
      };
      return opt;
    };
    await html2pdf().from(element).set(getOptions(`Chatistics with ${filename}`, element)).save();
    setLoading(false);
  };
 
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container is-flex is-justify-content-center">
          <button
            onClick={() => download()}
            className={`button is-primary is-large  ${
              loading ? "is-loading" : ""
            } `}
            disabled={loading}
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download
            Chatistics
          </button>
        </div>
      </div>
    </section>
  );
}

