import { axiosInstance } from "apis/AxiosInstance";

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

export const getUserCommunityList = async (user_id: string) => {
  const res = await axiosInstance.get(`/community/${user_id}/user`);

  return res;
};

export const uploadCommunity = async (data: any) => {
  const res = await axiosInstance.post(`/community`, data);

  return res;
};

export const deleteEachCommunity = async (data: object) => {
  const res = await axiosInstance.delete(`/community`, { data });

  return res.data;
};

export const updateCommunity = async (data: object) => {
  const res = await axiosInstance.put(`/community`, data);

  return res.data;
};

export const updateUserAllCommunity = async (data: object) => {
  const res = await axiosInstance.put(`/community/users`, data);

  return res;
};
