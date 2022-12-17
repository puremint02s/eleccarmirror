import axios from "axios";
import { axiosInstance } from "./AxiosInstance";

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

export const postCommunityImage = async (image: any) => {
  const { data } = await axiosInstance.post(
    `${BASE_URL}community/images`,
    image,
  );
  return data;
};
