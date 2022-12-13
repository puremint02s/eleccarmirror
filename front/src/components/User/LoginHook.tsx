import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { loginRequest } from "apis/UserApi";
import Storage from "apis/SessionStorage";

interface CommonUserData {
  id: string;
  password: string;
}

const LoginHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommonUserData>({
    mode: "onChange",
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const handleLoginSubmit = useCallback(async (userData: CommonUserData) => {
    const { id, password } = userData;
    const res = await loginRequest(id, password);

    if (!res.token) {
      alert(res.errorMessage);
    } else if (res.token) {
      Storage.setTokenItem(res.token);
      Storage.setUserIdItem(res.user_id);
      Storage.setIdItem(res.id);
      window.location.replace("/main");
    }
  }, []);

  return {
    register,
    errors,
    handleSubmit,
    handleLoginSubmit,
  };
};

export default LoginHook;
