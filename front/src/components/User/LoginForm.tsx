import React from "react";
import {
  LoginFormBox,
  LogoWrapper,
  LoginFormWrapper,
  LoginInputTitle,
  LoginInput,
  FootBox,
  RememberMeTitle,
  FindEmailPwdButton,
  ButtonBox,
  LoginButton,
  KakaoLoginButton,
  GoogleLoginButton,
} from "../../style/LoginFormStyle";
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
    <LoginFormBox>
      <LogoWrapper>
        <a href="/">
          <img
            style={{ width: 200 }}
            src="img/MyElecCar logo.png"
            alt="서비스 로고"
          />
        </a>
      </LogoWrapper>
      <LoginFormWrapper onSubmit={onLoginSubmitEvent}>
        <LoginInputTitle>이메일</LoginInputTitle>
        <LoginInput
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          placeholder="이메일을 입력해주세요."
        />
        {errors.email && <p>이메일을 다시 확인해주세요.</p>}
        <LoginInputTitle>비밀번호</LoginInputTitle>
        <LoginInput
          {...register("password", {
            required: true,
            minLength: 7,
            maxLength: 20,
            pattern: /^.(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
          })}
          placeholder="비밀번호를 입력해주세요."
        />
        {errors.password && <p>비밀번호를 다시 확인해주세요.</p>}
        <FootBox>
          <input type="checkbox" />
          <RememberMeTitle>remember me</RememberMeTitle>
          <a href="/find">
            <FindEmailPwdButton>아이디/비밀번호 찾기</FindEmailPwdButton>
          </a>
        </FootBox>
        <ButtonBox>
          <LoginButton type="submit">로그인</LoginButton>
          <KakaoLoginButton>카카오톡으로 시작</KakaoLoginButton>
          <GoogleLoginButton>구글로 시작</GoogleLoginButton>
        </ButtonBox>
      </LoginFormWrapper>
    </LoginFormBox>
  );
}

export default LoginForm;
