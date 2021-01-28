import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/testing"
    : process.env.REACT_APP_API_URL;

export const postFile = async (formData) => {
  try {
    const result = await axios.post(url, formData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
