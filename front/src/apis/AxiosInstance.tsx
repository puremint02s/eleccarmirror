import axios from "axios";

const backendPortNumber = "4005";
const BASE_URL =
  "http://" + window.location.hostname + ":" + backendPortNumber + "/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
  },
  timeout: 3000,
});

export const axiosLoginInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("user_id")}`,
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
