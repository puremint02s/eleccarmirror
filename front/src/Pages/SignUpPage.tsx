import { useState, useEffect } from "react";
import AddressPopUp from "components/SignUp/AddressPopUp";
import SignUpCodePopUp from "components/SignUp/SignUpCodePopUp";
import { useForm } from "react-hook-form";
import * as Api from "apis/UserSignApi";
import logo from "assets/img/MyElecCar logo.png";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

interface SignForm {
  email?: string;
  id?: string;
  nickname?: string;
  password?: string;
  confirmPassword?: string;
  age?: string;
  address?: string;
  car_owned?: boolean;
  elec_car_owned?: boolean;
}

const SignUpPage = () => {
  const [addressPopUpOpen, setAddressPopUpOpen] = useState(false);
  const [signUpCodePopUpOpen, setSignUpCodePopUpOpen] = useState(false);
  const [inputAddress, setInputAddress] = useState("");
  const [carOwned, setCarOwned] = useState(false);
  const [elecCarOwned, setElecCarOwned] = useState(false);
  const doSignup = useMutation(Api.registerRequest, {
    onSuccess: message => {
      navigate("/login");
      console.log({ success: message });
    },
    onError: error => {
      console.log({ error });
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
  }, [inputAddress]);

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
      car_owned: false,
      elec_car_owned: false,
    },
  });
  const popUpOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddressPopUpOpen(true);
  };

  const signUp = handleSubmit(registerForm => {
    delete registerForm.confirmPassword;
    doSignup.mutate(registerForm);

    // console.log(registerForm);
  });

  const signSame = handleSubmit(registerForm => {
    // const id = registerForm.id;
    // doSameCheck.mutate(id);
    // console.log(registerForm);
    console.log("dd");
  });

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
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ width: 180 }} src={logo} alt="서비스 로고" />
          <form
            onSubmit={signUp}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="id">아이디</label>
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 0",
                }}
                id="id"
                type="text"
                placeholder="아이디를 입력해주세요"
                {...register("id", {
                  required: "아이디를 입력해주세요",
                  pattern: {
                    value: /^(?=.*[A-Za-z0-9]).{4,10}$/,
                    message: "영문, 숫자로 4~10글자 입력해주세요.",
                  },
                  onChange: signSame,
                })}
              />
              <div>{errors.id && errors.id?.message}</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="email">이메일</label>
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 0",
                }}
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
              <div>{errors.email && errors.email?.message}</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="nickname">닉네임</label>
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 0",
                }}
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
              <div>{errors.nickname && errors.nickname?.message}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="password">비밀번호</label>
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 0",
                }}
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
              <div>{errors.password && errors.password?.message}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="confirmPassword">비밀번호 재확인</label>
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 0",
                }}
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
              <div>
                {errors.confirmPassword && errors.confirmPassword?.message}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="age">나이</label>
              <select
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#F6F6F6",
                  paddingLeft: "10px",
                  boxSizing: "border-box",
                  margin: "10px 10px 10px 0px",
                }}
                {...register("age")}
              >
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40대">40대</option>
                <option value="50대">50대</option>
                <option value="60대">60대 이상</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                padding: "5px 0",
                width: "320px",
              }}
            >
              <label htmlFor="address">주소</label>
              <div style={{ display: "flex", width: "100%" }}>
                <input
                  style={{
                    width: "150%",
                    height: "40px",
                    backgroundColor: "#F6F6F6",
                    paddingLeft: "10px",
                    boxSizing: "border-box",
                    margin: "10px 10px 10px 0px",
                  }}
                  id="address"
                  type={"text"}
                  placeholder="주소"
                  value={inputAddress}
                  {...register("address")}
                />
                <button
                  type="button"
                  onClick={popUpOpen}
                  style={{
                    width: "100%",
                    height: "40px",
                    backgroundColor: "#303030",
                    color: "white",
                    margin: "10px 0",
                  }}
                >
                  주소 검색
                </button>
              </div>
              <div>
                차량을 소지하고 계신가요?
                <label htmlFor="car_owned">
                  <input
                    type="radio"
                    name="car_owned"
                    {...(register("car_owned"),
                    {
                      onChange: e => setCarOwned(true),
                    })}
                  />
                  예
                </label>
                <label htmlFor="car_owned">
                  <input
                    type="radio"
                    name="car_owned"
                    {...(register("car_owned"),
                    {
                      onChange: e => setCarOwned(false),
                    })}
                  />
                  아니요
                </label>
              </div>
              {carOwned && (
                <div>
                  차량의 종류를 선택해주세요
                  <label htmlFor="elec_car_owned">
                    <input
                      type="radio"
                      name="elec_car"
                      {...(register("elec_car_owned"),
                      {
                        onChange: e => setElecCarOwned(true),
                      })}
                    />
                    내연기관
                  </label>
                  <label htmlFor="elec_car_owned">
                    <input
                      type="radio"
                      name="elec_car"
                      {...(register("elec_car_owned"),
                      {
                        onChange: e => setElecCarOwned(false),
                      })}
                    />
                    전기차
                  </label>
                </div>
              )}
            </div>

            <button
              style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#0A84FF",
                color: "white",
                margin: "10px 0",
              }}
              type="submit"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
