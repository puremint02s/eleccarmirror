import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { LoginRequest } from "apis/LoginApi";
import SessionStorage from "apis/SessionStorage";

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
    const res = await LoginRequest(id, password);
    if (res) {
      SessionStorage.setTokenItem(res.token);
      SessionStorage.setUserIdItem(res.user_id);
      SessionStorage.setIdItem(res.id);
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
