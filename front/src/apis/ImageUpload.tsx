import { axiosInstance, axiosLoginInstance } from "./AxiosInstance";
import axios from "axios";

const BASE_URL =
  "http://" +
  window.location.hostname +
  ":" +
  process.env.REACT_APP_BACK_SERVER_PORT +
  "/";

interface carData {
  filename: string;
  prediction: Array<number>;
}

export const postImage = async (image: any) => {
  const { data } = await axios.post(`${BASE_URL}images`, image);
  return data;
};
