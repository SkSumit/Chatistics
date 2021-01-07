import React, { useState, useEffect } from "react";
import "./styles/index.scss";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import { mockData } from "./mockAPI";
import TimelineSection from './components/TimelineSection'
import axios from "axios";



function App() {
  const [file, setFile] = useState(null);
  useEffect(() => {
    // if (process.env.NODE_ENV === "production") {
    //   axios
    //     .get(process.env.REACT_APP_API_URL)
    //     .then(({ data }) => {
    //       console.log("data", data);
    //       setFile(data[0]);
    //     });
    // } else {
    //   console.log(mockData);
    //   setFile(mockData);
    // }
    setFile(mockData)
  }, []);

  return (
    <>
      <Hero file={file} />
      <Summary file={file} />
      <TimelineSection data={mockData.stats.timelineByMonth}/>
    </>
  );
}

export default App;
