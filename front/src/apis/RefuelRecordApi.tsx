import { axiosInstance } from "./AxiosInstance";

export const AddRefuelRecord = async (
  user_id: string,
  oiling_date: Date,
  gas_type: string,
  gas_amount: number,
  odometer: number,
) => {
  const res = await axiosInstance.post("/gas", {
    user_id,
    oiling_date,
    gas_type,
    gas_amount,
    odometer,
  });
  return res.data;
};

export const getEachRefuelRecord = async (_id: string) => {
  const res = await axiosInstance.get(`/gas/${_id}`);
  return res.data;
};

export const getUserRefuelRecord = async (user_id: string) => {
  const res = await axiosInstance.get(`/gas/${user_id}/user`);
  return res.data;
};

export const modifyRefuelRecord = async (
  _id: string,
  oiling_date: Date,
  gas_type: string,
  gas_amount: number,
  odometer: number,
) => {
  const res = await axiosInstance.put("/gas", {
    _id,
    oiling_date,
    gas_type,
    gas_amount,
    odometer,
  });
  return res.data;
};

export const deleteRefuelRecord = async (data: object) => {
  const res = await axiosInstance.delete("/gas", { data });
  return res.data;
};
