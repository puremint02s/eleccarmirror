// import { axiosInstance } from "apis/AxiosInstance";
import axios from "axios";

//------ 임시 설정 --------
const backendPortNumber = "4005";
const BASE_URL =
  "http://" + window.location.hostname + ":" + backendPortNumber + "/";

const BearerString =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODE3NGUxZWEtYjY4YS00MDllLWJjNmUtNzc2M2U2OWYxNTIwIiwiaWF0IjoxNjcwNjg2MTQzfQ.76gaeWUa74s0QaTfCnGVcRzRAi7nh4WYtBFVoam_xcQ";

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
