import React from "react";
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";

interface CommonType {
  email: string;
  password: string;
}

interface LoginFormProps {
  register: UseFormRegister<CommonType>;
  errors: Partial<FieldErrorsImpl<CommonType>>;
  onLoginSubmitEvent: () => void;
}

function LoginForm({ register, errors, onLoginSubmitEvent }: LoginFormProps) {
  return (
    <div>
      <img
        style={{ width: 320 }}
        src="img/MyElecCar logo.png"
        alt="서비스 로고"
      />
      <form onSubmit={onLoginSubmitEvent}>
        <p>이메일</p>
        <input
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          placeholder="이메일을 입력해주세요."
        />
        {errors.email && <p>이메일을 다시 확인해주세요.</p>}
        <p>비밀번호</p>
        <input
          {...register("password", {
            required: true,
            minLength: 7,
            maxLength: 20,
            pattern: /^.(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
          })}
          placeholder="비밀번호를 입력해주세요."
        />
        {errors.password && <p>비밀번호를 다시 확인해주세요.</p>}
        <div>
          <input type="checkbox" /> remember me
          <p>아이디/비밀번호 찾기</p>
        </div>
        <div>
          <p>
            <button type="submit">로그인</button>
          </p>
          <p>
            <button type="submit">카카오톡으로 시작</button>
          </p>
          <p>
            <button type="submit">구글로 시작</button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
