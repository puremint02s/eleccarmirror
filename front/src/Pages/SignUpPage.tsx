import React, { useState, useEffect, useRef, useCallback } from "react";
import AddressPopUp from "components/SignUp/AddressPopUp";
import SignUpCodePopUp from "components/SignUp/SignUpCodePopUp";
import { useForm } from "react-hook-form";
import * as Api from "apis/UserSignApi";
import logo from "assets/img/MyElecCar logo.png";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import styled from "styled-components";
import _ from "lodash";
import { isConstTypeReference } from "typescript";

interface SignForm {
  email?: string;
  id?: string;
  nickname?: string;
  password?: string;
  confirmPassword?: string;
  age?: string;
  address?: string;
  carOwned?: boolean;
  elecCarOwned?: boolean;
}

const SignUpPage = () => {
  const [addressPopUpOpen, setAddressPopUpOpen] = useState(false);
  const [signUpCodePopUpOpen, setSignUpCodePopUpOpen] = useState(false);
  const [inputAddress, setInputAddress] = useState("");
  const [answer, setAnswer] = useState(undefined);
  const [carOwned, setCarOwned] = useState(false);
  const [elecCarOwned, setElecCarOwned] = useState(false);

  function handleCarOwnedChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value == "yes") {
      setCarOwned(true);
    } else {
      setCarOwned(false);
    }
  }
  function handleElecCarOwnedChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value == "yes") {
      setElecCarOwned(true);
    } else {
      setElecCarOwned(false);
    }
  }

  const doSignup = useMutation(Api.registerRequest, {
    onSuccess: message => {
      const signKey = String(Object.keys(message));
      const signValue = String(Object.values(message));
      if (signKey == "errorMessage") {
        swal("회원가입 불가", signValue);
      } else {
        navigate("/login");
        swal("회원가입 완료", "회원가입이 완료되었습니다.");
      }
    },
    onError: error => {
      swal("회원가입 불가", "아이디가 중복되었습니다");
    },
  });

  const doSameCheck = useMutation(Api.registerUserGet, {
    onSuccess: message => {
      console.log({ success: message });
    },
    onError: error => {
      console.log({ error });
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    setValue("address", inputAddress);
    setValue("carOwned", carOwned);

    setValue("elecCarOwned", elecCarOwned);
  }, [inputAddress, carOwned, elecCarOwned]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<SignForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
      id: "",
      nickname: "",
      password: "",
      confirmPassword: "",
      age: "20대",
      address: inputAddress,
      carOwned: false,
      elecCarOwned: false,
    },
  });
  const popUpOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddressPopUpOpen(true);
  };

  const signUp = handleSubmit(registerForm => {
    delete registerForm.confirmPassword;
    doSignup.mutate(registerForm);
  });

  const signSame = (id: object | undefined) => {
    doSameCheck.mutate(id);
  };

  const delayedQueryCall = useCallback<any>(
    _.debounce(q => signSame(q), 500),
    [],
  );
  const handleSearchChange = (e: React.ChangeEvent<any>) => {
    const target = { event: e.target.value };
    delayedQueryCall(target);
  };

  return (
    <>
      {addressPopUpOpen && (
        <AddressPopUp
          setAddressPopUpOpen={setAddressPopUpOpen}
          setInputAddress={setInputAddress}
        />
      )}
      {signUpCodePopUpOpen && (
        <SignUpCodePopUp setSignUpCodePopUpOpen={setSignUpCodePopUpOpen} />
      )}
      <Wrapper>
        <Wrap>
          <SignImg src={logo} alt="서비스 로고" />
          <SignContent onSubmit={signUp}>
            <SignWrap>
              <label htmlFor="id">아이디</label>
              <SignText
                id="id"
                type="text"
                placeholder="아이디를 입력해주세요"
                {...register("id", {
                  required: "아이디를 입력해주세요",
                  pattern: {
                    value: /^(?=.*[A-Za-z0-9]).{4,10}$/,
                    message: "영문, 숫자로 4~10글자 입력해주세요.",
                  },
                  onChange: handleSearchChange,
                })}
              />
              <ErrorText>{errors.id && errors.id?.message}</ErrorText>
            </SignWrap>

            <SignWrap>
              <label htmlFor="email">이메일</label>
              <SignText
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요."
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "이메일 형식에 맞지 않습니다!",
                  },
                })}
              />
              <ErrorText>{errors.email && errors.email?.message}</ErrorText>
            </SignWrap>

            <SignWrap>
              <label htmlFor="nickname">닉네임</label>
              <SignText
                id="nickname"
                type="name"
                placeholder="닉네임을 입력해주세요"
                {...register("nickname", {
                  required: "닉네임을 입력해주세요",
                  minLength: {
                    value: 3,
                    message: "닉네임은 3글자 이상 입력해주세요.",
                  },
                })}
              />
              <ErrorText>
                {errors.nickname && errors.nickname?.message}
              </ErrorText>
            </SignWrap>
            <SignWrap>
              <label htmlFor="password">비밀번호</label>
              <SignText
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...register("password", {
                  required: {
                    value: true,
                    message: "비밀번호를 입력해주세요.",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,25}$/,
                    message: "숫자,특수문자,영문 포함 7자리 이상 적어주세요.",
                  },
                })}
              />
              <ErrorText>
                {errors.password && errors.password?.message}
              </ErrorText>
            </SignWrap>
            <SignWrap>
              <label htmlFor="confirmPassword">비밀번호 재확인</label>
              <SignText
                id="confirmPassword"
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
                {...register("confirmPassword", {
                  required: "비밀번호를 다시 한번 입력해주세요.",
                  validate: {
                    mathchesPreviousPassword: value => {
                      const { password } = getValues();
                      return (
                        password === value || "비밀번호가 일치하지 않습니다."
                      );
                    },
                  },
                })}
              />
              <ErrorText>
                {errors.confirmPassword && errors.confirmPassword?.message}
              </ErrorText>
            </SignWrap>
            <SignWrap>
              <label htmlFor="age">나이</label>
              <SignSelect {...register("age")}>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40대">40대</option>
                <option value="50대">50대</option>
                <option value="60대">60대 이상</option>
              </SignSelect>
            </SignWrap>
            <SignWrap>
              <label htmlFor="address">주소</label>
              <AddressWrap>
                <SignInput
                  id="address"
                  type={"text"}
                  placeholder="주소"
                  value={inputAddress}
                  {...register("address")}
                />
                <AddressButton type="button" onClick={popUpOpen} style={{}}>
                  주소 검색
                </AddressButton>
              </AddressWrap>
              <RadioWrap>
                <br />
                차량을 소지하고 계신가요?
                <label htmlFor="carOwned">
                  <input
                    type="radio"
                    name="carOwned"
                    value="yes"
                    checked={carOwned === true}
                    {...(register("carOwned"),
                    {
                      onChange: handleCarOwnedChange,
                    })}
                  />
                  예
                </label>
                <label htmlFor="carOwned">
                  <input
                    type="radio"
                    name="carOwned"
                    value="no"
                    checked={carOwned === false}
                    {...(register("carOwned"),
                    {
                      onChange: handleCarOwnedChange,
                    })}
                  />
                  아니요
                </label>
              </RadioWrap>
              {carOwned && (
                <RadioWrap>
                  <br />
                  차량의 종류를 선택해주세요
                  <label htmlFor="elecCarOwned">
                    <input
                      type="radio"
                      name="elecCarOwned"
                      value="yes"
                      checked={elecCarOwned === true}
                      {...(register("elecCarOwned"),
                      {
                        onChange: handleElecCarOwnedChange,
                      })}
                    />
                    전기차
                  </label>
                  <label htmlFor="elecCarOwned">
                    <input
                      type="radio"
                      name="elecCarOwned"
                      value="no"
                      checked={elecCarOwned === false}
                      {...(register("elecCarOwned"),
                      {
                        onChange: handleElecCarOwnedChange,
                      })}
                    />
                    내연기관
                  </label>
                </RadioWrap>
              )}
            </SignWrap>

            <SubmitButton type="submit">회원가입</SubmitButton>
          </SignContent>
        </Wrap>
      </Wrapper>
    </>
  );
};

export default SignUpPage;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignContent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const SignWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 5px 0;
  width: 320px;
`;

const SignText = styled.input`
  width: 100%;
  height: 40px;
  background-color: #f6f6f6;
  padding-left: 10px;
  box-sizing: border-box;
  margin: 10px 0;
  border-radius: 10px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
`;

const SubmitButton = styled.button`
  border-radius: 10px;
  width: 100%;
  height: 40px;
  background-color: #0a84ff;
  color: white;
  margin: 10px 0;
`;

const AddressButton = styled.button`
  border-radius: 10px;
  width: 100%;
  height: 40px;
  background-color: #303030;
  color: white;
  margin: 10px 0;
`;

const SignInput = styled.input`
  width: 150%;
  height: 40px;
  background-color: #f6f6f6;
  padding-left: 10px;
  box-sizing: border-box;
  margin: 10px 10px 10px 0px;
  border-radius: 10px;
`;

const SignSelect = styled.select`
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 40px;
  background-color: #f6f6f6;
  padding-left: 10px;
  box-sizing: border-box;
  margin: 10px 10px 10px 0px;
`;

const SignImg = styled.img`
  width: 180px;
`;

const AddressWrap = styled.div`
  display: flex;
  width: 100%;
`;

const RadioWrap = styled.div`
  font-size: 0.8rem;
`;
