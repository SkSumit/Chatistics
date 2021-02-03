import Head from "next/head";
import React, { useState, useEffect, createContext } from "react";
import { getDefaultStats } from "../api/api";
import Hero from "../components/sections/Hero";
import Summary from "../components/sections/Summary";
import TimelineSection from "../components/sections/TimelineSection";
import DaySection from "../components/sections/DaySection";
import Loader, { LoaderAnalysis } from "../components/Loader";
import TimeRadarSection from "../components/sections/TimeRadarSection";
import UserSummary from "../components/sections/UserSummary";
import Input from "../components/Input";
import Heatmap from "../components/sections/Heatmap";
import EmojiSection from "../components/sections/EmojiSection";
import WordcloudSection from "../components/sections/WordcloudSection";
import SpecificUserSection from "../components/sections/SpecificUserSection";
import ErrorModal from "../components/modals/ErrorModal";
import Footer from "../components/sections/Footer";

export const FileContext = createContext(null);

export default function Home({ data }) {
  const [file, setFile] = useState(data);
  const [loader, setLoader] = useState(false);
  const [initLoader, setInitLoader] = useState(true);
  const [axiosError, setAxiosError] = useState(null);
  const [showDownloadBtn, setShowDownloadBtn] = useState(false);

  useEffect(() => {
    setInitLoader(false);
  }, []);

  if (initLoader) {
    return <Loader />;
  }

  if (loader) {
    return <LoaderAnalysis />;
  }
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon-96x96.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>Chatistics - Open Source WhatsApp Analytics and Insights</title>
        <meta
          name="title"
          content="Chatistics - Open Source WhatsApp Analytics and Insights"
        />
        <meta
          name="description"
          content="Get insights and analysis of your WhatsApp chats, share it with your friends, 100% Secure and Open Source"
        />
        <meta
          name="google-site-verification"
          content="WCfe4Q5dRptivznL2ZrsKuMPN48PTz9whNqtF6MhHOk"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chatistics.vercel.app/" />
        <meta
          property="og:title"
          content="Chatistics - Open Source WhatsApp Analytics and Insights"
        />
        <meta
          property="og:description"
          content="Get insights and analysis of your WhatsApp chats, share it with your friends, 100% Secure and Open Source"
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://chatistics.vercel.app/" />
        <meta
          property="twitter:title"
          content="Chatistics - Open Source WhatsApp Analytics and Insights"
        />
        <meta
          property="twitter:description"
          content="Get insights and analysis of your WhatsApp chats, share it with your friends, 100% Secure and Open Source"
        />
        <meta property="twitter:image" content="" />
      </Head>

      <Hero />
      <Input
        setFile={setFile}
        setLoader={setLoader}
        setAxiosError={setAxiosError}
        showDownloadBtn={showDownloadBtn}
        setShowDownloadBtn={setShowDownloadBtn}
      />
      <FileContext.Provider value={{ file }}>
        <Summary />
        {/* <TimelineSection /> */}
        <DaySection />
        {/* <TimeRadarSection /> */}
        <Heatmap />
        <EmojiSection />
        {/* <UserSummary /> */}
        <WordcloudSection />
        <SpecificUserSection />
      </FileContext.Provider>
      <Footer />
      {axiosError && <ErrorModal error={axiosError} setError={setAxiosError} />}
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await getDefaultStats();
  if (!data || data.isAxiosError) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data,
    },
  };
}
