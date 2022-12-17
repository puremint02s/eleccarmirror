import { Link } from "react-router-dom";
import {
  LoginFormBox,
  LogoWrapper,
  LoginFormWrapper,
  LoginInputTitle,
  LoginInput,
  FootBox,
  FindEmailPwdButton,
  ButtonBox,
  InputErrorMessage,
  LoginButton,
} from "style/LoginFormStyle";
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import LogoImg from "assets/img/MyElecCar logo.png";
import { R } from "App";

interface CommonType {
  id: string;
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
        <Link to={R.START}>
          <img style={{ width: 200 }} src={LogoImg} alt="서비스 로고" />
        </Link>
      </LogoWrapper>
      <LoginFormWrapper onSubmit={onLoginSubmitEvent}>
        <LoginInputTitle>아이디</LoginInputTitle>
        <LoginInput
          {...register("id", {
            required: true,
            pattern: /[A-Za-z0-9]{4,10}/,
          })}
          placeholder="아이디를 입력해주세요."
        />
        {errors.id && (
          <InputErrorMessage>아이디를 다시 확인해주세요.</InputErrorMessage>
        )}
        <LoginInputTitle>비밀번호</LoginInputTitle>
        <LoginInput
          type="password"
          {...register("password", {
            required: true,
            // minLength: 7,
            // maxLength: 20,
            // pattern: /^.(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
            // 테스트용 계정 비밀번호가 1111이라 임시로 조건 해제
          })}
          placeholder="비밀번호를 입력해주세요."
        />
        {errors.password && (
          <InputErrorMessage>비밀번호를 다시 확인해주세요.</InputErrorMessage>
        )}
        <ButtonBox>
          <LoginButton type="submit">로그인</LoginButton>
        </ButtonBox>
      </LoginFormWrapper>
    </LoginFormBox>
  );
}

export default LoginForm;
