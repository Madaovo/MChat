import axios from "axios";
const request = axios.create({
  baseURL: "",
  timeout: 60000,
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("_token");
  if (token) {
    config.headers.authorization = `JWT ${token}`;
  }
  return config;
});

export default request;
