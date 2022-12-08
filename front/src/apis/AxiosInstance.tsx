import axios from "axios";

axios.defaults.timeout = 3000;
axios.defaults.headers["Content-Type"] = "application/json";
const backendPortNumber = "4005";
const BASE_URL =
  "http://" + window.location.hostname + ":" + backendPortNumber + "/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorizaion: `Bearer ${sessionStorage.getItem("userToken")}`,
  },
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  req => {
    return req;
  },
  error => {
    throw new Error(error);
  },
);

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    throw new Error(error);
  },
);
