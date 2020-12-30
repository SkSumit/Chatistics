import React, { useState } from "react";
import "./styles/index.scss";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import {data} from './mockAPI'
function App() {
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    // console.log(event.target.files[0]);
    // setFile(event.target.files[0]);
  };

  const onSubmitFile = (event) => {
    event.preventDefault();
    setFile(data);
    // readFile(file);
  };

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      // console.log(event.target.result)
    };
    reader.readAsText(file);
  };

  return (
    <>
    <Hero file={file} onSubmitFile={onSubmitFile} onFileChange={onFileChange} />
    <Summary file={file}/>
    </>
  );
}

export default App;
