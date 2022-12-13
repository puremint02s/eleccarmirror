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
