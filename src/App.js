import React, { useState,useEffect } from "react";
import "./styles/index.scss";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Navbar from './components/Navbar'
import {data} from './mockAPI'
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null);
  
  useEffect(() => {
    //  const data = await axios.get('http://localhost:5000/api/v1/dummy')
    //  console.log('data',data.data[0])
     setFile(data)
  
  }, [file])

  const onFileChange = (event) => {
    // console.log(event.target.files[0]);
    // setFile(event.target.files[0]);
  };
  
  const onSubmitFile = (event) => {
    event.preventDefault();
    setFile(data);
    // readFile(file);
  };


  return (
    <>
  
    <Hero file={file} onSubmitFile={onSubmitFile} onFileChange={onFileChange} />
    <Summary file={file}/>
    </>
  );
}

export default App;
