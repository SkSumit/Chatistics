import React, { useState, useEffect, createContext } from "react";
import "./styles/index.scss";
import Hero from "./components/sections/Hero";
import Summary from "./components/sections/Summary";
import { mockData } from "./mockAPI";
import TimelineSection from "./components/sections/TimelineSection";
import DaySection from "./components/sections/DaySection";
import Loader, { LoaderAnalysis } from "./components/Loader";
import TimeRadarSection from "./components/sections/TimeRadarSection";
import UserSummary from "./components/sections/UserSummary";
import Input from "./components/Input";
import Heatmap from "./components/sections/Heatmap";
import EmojiSection from "./components/sections/EmojiSection";
import WordcloudSection from "./components/sections/WordcloudSection";
import SpecificUserSection from "./components/sections/SpecificUserSection";
import ErrorModal from './components/modals/ErrorModal'
import {postFile} from './api/api'
import {fileExtensionValidation} from './api/apiUtils'


export const FileContext = createContext(null);

function App() {
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [initLoader, setInitLoader] = useState(true);
  const [showDownloadBtn, setShowDownloadBtn] = useState(false);
  const [axiosError, setAxiosError] = useState(null);


  useEffect(() => {
    setFile(mockData);
    setInitLoader(false);
  }, []);

  const handlePostFile = async (data) => {
    console.log(data);
    const formData = new FormData();
      try {
        fileExtensionValidation(data);
        formData.append("file", data);
        setLoader(true);
        const result = await postFile(formData);
        console.log(result);
        setLoader(false);
      } catch (error) {
        setAxiosError(true)
        setLoader(false)
        console.log(error);
      }
  } 
  

  if (initLoader) {
    return <Loader />;
  }

  if (loader ) {
    return <LoaderAnalysis />;
  }

  return (
    <FileContext.Provider value={{ file, setLoader,handlePostFile,axiosError, setAxiosError  }}>
      <Hero />
      <Input />
      <Summary file={file} />
      <TimelineSection data={mockData.stats.timelineByMonth} />
      <DaySection />
      <TimeRadarSection />
      <Heatmap />
      <EmojiSection />
      <UserSummary />
      <WordcloudSection />
      <SpecificUserSection />
     {axiosError && <ErrorModal error={axiosError} setError = {setAxiosError}/>}
    </FileContext.Provider>
  );
}

export default App;
