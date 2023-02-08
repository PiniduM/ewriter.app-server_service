import axios from "axios";

const informProfileCreation = async (loginToken) => {
  try {
    const result = await axios.post(
      "http://localhost:5001/s5002/profilecreated",
      { loginToken }
    );
    return result.data;
  } catch (err) {
    return err;
  }
};

export default informProfileCreation;
