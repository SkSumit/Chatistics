import React, { useState, useEffect, createContext } from "react";
import "./styles/index.scss";
import Hero from "./components/sections/Hero";
import Summary from "./components/sections/Summary";
import { mockData } from "./mockAPI";
import TimelineSection from "./components/sections/TimelineSection";
import DaySection from "./components/sections/DaySection";
import axios from "axios";
import Loader, { LoaderAnalysis } from "./components/Loader";
import TimeRadarSection from "./components/sections/TimeRadarSection";
import UserSummary from "./components/sections/UserSummary";
import CTA from "./components/CTA";


export const FileContext = createContext(null);

function App() {
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setFile(mockData);
    }, 2000);
  }, []);

  if (loader) {
    return <LoaderAnalysis />;
  }

  return (
    <FileContext.Provider value={{ file, setLoader }}>
      {!file ? (
        <Loader />
      ) : (
        <div>
          <Hero />
          <Summary file={file} />
          <TimelineSection data={mockData.stats.timelineByMonth} />
          <DaySection />
          <TimeRadarSection />
          <UserSummary />
        </div>
      )}
    </FileContext.Provider>
  );
}

export default App;
