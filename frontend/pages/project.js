import React from "react";
import About from "../components/sections/About";
import { getAnalytics } from "../api/api";

const Project = ({analytics}) => {
  return <About analytics={analytics} />;
};
export default Project;

export async function getStaticProps(context) {

  const analytics = await getAnalytics();
  if (!analytics || analytics.isAxiosError) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
    
      analytics: analytics,
    },
  };
}