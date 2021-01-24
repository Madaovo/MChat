import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:7002",
  timeout: 60000,
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("_token");
  if (token) {
    config.headers.authorization = `JWT ${token}`;
  }
  return config;
});

request.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res.data;
    } else {
      return {
        ...res.data,
        code: -1,
      };
    }
  },
  (err) => console.log(err, "网络错误")
);

export default request;
