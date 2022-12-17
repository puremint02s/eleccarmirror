import LoginForm from "components/User/LoginForm";
import LoginHook from "components/User/LoginHook";

function LoginPage() {
  const { register, errors, handleSubmit, handleLoginSubmit } = LoginHook();

  return (
    <LoginForm
      register={register}
      errors={errors}
      onLoginSubmitEvent={handleSubmit(handleLoginSubmit)}
    />
  );
}

export default LoginPage;
