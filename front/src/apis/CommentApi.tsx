// import { axiosInstance } from "apis/AxiosInstance";
import axios from "axios";

//------ 임시 설정 --------
const backendPortNumber = "4005";
const BASE_URL =
  "http://" + window.location.hostname + ":" + backendPortNumber + "/";

const BearerString =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzBiNjkxY2ItYzk4OS00NTAzLTg2YTItZjE3ZGM4N2I3N2I4IiwiaWF0IjoxNjcwOTE3MTI1fQ.fJbqf-cvOLQmcZxPQYk0HDnKdMBgGc86boXow0BwoTM";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${BearerString}`,
  },
  timeout: 3000,
});

//---------------
export const getCommunityComments = async (id: string) => {
  const res = await axiosInstance.get(`/community/comment/${id}`);

  return res.data;
};

export const getAllComments = async () => {
  const res = await axiosInstance.get(`/comments/all`);

  return res.data;
};

export const postComment = async (data: object) => {
  const res = await axiosInstance.post(`/comment`, data);

  return res.data;
};

export const deleteComment = async (data: object) => {
  const res = await axiosInstance.delete(`/comment`, { data });

  return res.data;
};

export const editComment = async (data: object) => {
  const res = await axiosInstance.put(`/comment`, data);

  return res.data;
};
