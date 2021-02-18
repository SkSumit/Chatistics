import axios from "axios";
const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : process.env.NEXT_PUBLIC_API_URL;

export const postFile = async (formData) => {
  try {
    const result = await axios.post(url + "/testing", formData);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDefaultStats = async () => {
  try {
    const result = await axios.get(url + "/api/v1/dummy");
    console.log(result.data);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postFeedback = async (filename, rating) => {
  try {
    const result = await axios.post(url + "/api/v1/feedback", {
      filename,
      rating,
    });
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
