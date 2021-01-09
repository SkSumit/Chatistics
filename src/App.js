import React, { useState, useEffect, createContext } from "react";
import "./styles/index.scss";
import Hero from "./components/sections/Hero";
import Summary from "./components/sections/Summary";
import { mockData } from "./mockAPI";
import TimelineSection from "./components/sections/TimelineSection";
import DaySection from "./components/sections/DaySection";
import axios from "axios";
import Loader from './components/Loader'

export const FileContext = createContext(null);

function App() {
  const [file, setFile] = useState(null);
  useEffect(() => {
    setInterval(() => {
      setFile(mockData);
      
    }, 3000);
  }, []);

  return (
    <FileContext.Provider value={file}>
      {!file ? (
        < Loader/>
      ) : (
        <>
          <Hero file={file} />
          <Summary file={file} />
          <TimelineSection data={mockData.stats.timelineByMonth} />
          <DaySection />
        </>
      )}
    </FileContext.Provider>
  );
}

export default App;
