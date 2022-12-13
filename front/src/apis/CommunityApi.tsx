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

export const getCommunityPerPage = async (currentPage: number) => {
  const res = await axiosInstance.get(
    `/community?page=${currentPage}&perPage=10`,
  );

  return res.data;
};

export const getEachCommunity = async (id: string) => {
  const res = await axiosInstance.get(`/community/${id}`);

  return res.data;
};

export const getAllCommunity = async () => {
  const res = await axiosInstance.get(`/community/all`);

  return res.data;
};

export const deleteEachCommunity = async (data: object) => {
  const res = await axiosInstance.delete(`/community`, { data });

  return res.data;
};

export const updateCommunity = async (data: object) => {
  const res = await axiosInstance.put(`/community`, data);

  return res.data;
};
