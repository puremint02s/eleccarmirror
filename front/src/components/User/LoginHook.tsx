import { useCallback } from "react";
import { useForm } from "react-hook-form";

interface CommonType {
  email: string;
  password: string;
}

const LoginHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommonType>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = useCallback(async (userData: CommonType) => {
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
