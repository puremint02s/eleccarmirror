import { useCallback } from "react";
import { useForm } from "react-hook-form";

interface CommonUserData {
  email: string;
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
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = useCallback(async (userData: CommonUserData) => {
    console.log(userData);
  }, []);

  return {
    register,
    errors,
    handleSubmit,
    handleLoginSubmit,
  };
};

export default LoginHook;
