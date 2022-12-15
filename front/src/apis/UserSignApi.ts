import { axiosInstance } from "./AxiosInstance";
import swal from "sweetalert";

interface SignForm {
  email?: string;
  id?: string;
  nickname?: string;
  password?: string;
  age?: string;
  address?: string;
  car_owned?: boolean;
  elec_car_owned?: boolean;
}

axiosInstance.interceptors.response.use(
  function (response) {
    /*
      http status가 200인 경우
      응답 성공 직전 호출됩니다. 
      .then() 으로 이어집니다.
  */
    return response;
  },

  function (error) {
    swal(error);
    /*
      http status가 200이 아닌 경우
      응답 에러 직전 호출됩니다.
      .catch() 으로 이어집니다.    
  */
    return Promise.reject(error);
  },
);

export const RegisterRequest = async (registerForm: SignForm) => {
  const res = await axiosInstance.post("/user/register", registerForm);
  console.log(res.data);
  return res.data;
};
