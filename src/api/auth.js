import axios from "../axios";

const register = async (data) => {
  try {
    const response = await axios.post("/auth/register", data);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default register;
