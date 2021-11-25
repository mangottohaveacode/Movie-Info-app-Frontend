import axios from "axios";
import * as authConstants from "../constants/auth";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_MOVIE_INFO_API}/api`
});

instance.interceptors.request.use(
  (config) => ({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem(authConstants.TOKEN)}`
    }
  }),
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(authConstants.TOKEN);
    }
    return Promise.reject(error);
  }
);

export default instance;
