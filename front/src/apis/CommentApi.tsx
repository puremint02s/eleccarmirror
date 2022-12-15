import { axiosInstance } from "apis/AxiosInstance";

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
