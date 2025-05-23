import axios from "axios";

const informProfileCreation = async (loginToken) => {
  const ulr = process.env.URL_SERVER_MAIN_ROOT + "/s5002/profilecreated";

  const config = {
    headers:{"Content-Legth": "67"}
  }
  try {
    
    const result = await axios.post(ulr, { loginToken },config);
    return result.data;
  } catch (err) {
    throw err;
  }
};

export default informProfileCreation;
