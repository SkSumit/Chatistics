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
import Input from "./components/Input";
import Heatmap from './components/sections/Heatmap'
import EmojiSection from './components/sections/EmojiSection'
import WordcloudSection from './components/sections/WordcloudSection'


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
          <Input/>
          <Summary file={file} />
          <TimelineSection data={mockData.stats.timelineByMonth} />
          <DaySection />
          <TimeRadarSection />
          <Heatmap/>
          <EmojiSection/>
          <UserSummary/>
          <WordcloudSection/>
        </div>
      )}
    </FileContext.Provider>
  );
}

export default App;
