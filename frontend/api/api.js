import axios from "axios";
const url =
  process.env.NODE_ENV === "development"
    ? {
        dummy: "http://127.0.0.1:5000/api/v1/dummy",     
        analytics: "http://127.0.0.1:5000/api/v1/insights",    
      }
    : 
    {
        dummy: process.env.NEXT_PUBLIC_API_URL_DUMMY,
        analytics: process.env.NEXT_PUBLIC_API_URL_ANALYTICS,
    }

export const postFile = async (formData) => {
  try {
    const result = await axios.post(url.analytics, formData);
    // console.log(result)
    return result;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

export const getDefaultStats = async () => {
  try {
    const result = await axios.get(url.dummy);
    return result;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const postPolls = async (user) => {
  try {
    const result = await axios.post(url + "/api/v1/analytics/polls", {
   user
    });
    
    return result.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const incVisitorCount = async () => {
  try {
    const result = await axios.post(url + "/api/v1/analytics/visited");
    return result.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const getAnalytics = async () => {
  try {
    const result = await axios.get(url + "/api/v1/analytics");
    return result.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
}