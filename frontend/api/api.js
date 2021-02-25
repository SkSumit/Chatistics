import axios from "axios";
const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : process.env.NEXT_PUBLIC_API_URL;

export const postFile = async (formData) => {
  try {
    const result = await axios.post(url + "/testing", formData);
    console.log(result)
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDefaultStats = async () => {
  try {
    const result = await axios.get(url + "/api/v1/dummy");
    return result;
  } catch (error) {
    console.log(error);
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
    console.log(error);
    return error;
  }
};

export const incVisitorCount = async () => {
  try {
    const result = await axios.post(url + "/api/v1/analytics/visited");
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAnalytics = async () => {
  try {
    const result = await axios.get(url + "/api/v1/analytics");
    console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}