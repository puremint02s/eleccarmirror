import { axiosInstance } from "./AxiosInstance";
interface CarProps {
  model: string;
  brand: string;
}

interface CarInfo {
  current: CarProps;
  recommended: CarProps;
}

export const getCarInfo = async () => {
  const res = await axiosInstance.get("/car");
  return res;
};

export const updateCarInfo = async (Car: CarInfo) => {
  const res: CarInfo = await axiosInstance.put("/car", Car);
  return res;
};

export const postCarInfo = async (Car: CarInfo) => {
  const res: CarInfo = await axiosInstance.post("/car", Car);
  return res;
};
