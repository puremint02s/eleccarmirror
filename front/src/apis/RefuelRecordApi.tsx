import { axiosInstance } from "./AxiosInstance";

export const AddRefuelRecord = async (
  user_id: string,
  oiling_date: string,
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

export const GetEachRefuelRecord = async (_id: string) => {
  const res = await axiosInstance.get(`/gas/${_id}`);
  return res.data;
};

export const GetUserRefuelRecord = async (user_id: string) => {
  const res = await axiosInstance.get(`/gas/${user_id}/user`);
  return res.data;
};

export const ModifyRefuelRecord = async (
  _id: string,
  oiling_date: string,
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

// export const DeleteRefuelRecord = async (_id: string) => {
//   const res = await axiosInstance.delete("/gas", { _id });
//   return res.data;
// };
