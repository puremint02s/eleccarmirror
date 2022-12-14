import { axiosInstance, axiosLoginInstance } from "./AxiosInstance";

interface StepInfo {
  step: string;
}

export const getStepInfo = async () => {
  const res = await axiosInstance.get("/step");
  return res;
};

export const updateStepInfo = async (step: string) => {
  const res: StepInfo = await axiosInstance.put("/step", {
    step,
  });
  return res;
};

export const postStepInfo = async (step: string) => {
  const res: StepInfo = await axiosInstance.post("/step", {
    step,
  });
  return res;
};
