import React from "react";
import LoginForm from "../User/LoginForm";
import LoginHook from "../User/LoginHook";

function LoginPage() {
  const { register, errors, handleSubmit, handleLoginSubmit } = LoginHook();
  return (
    <LoginForm register={register} errors={errors} onLoginSubmitEvent={handleSubmit(handleLoginSubmit)}
    />
  );
}

export default LoginPage;
