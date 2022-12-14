import styled from "styled-components/macro";

import step_0 from "assets/img/step_0.png";
import step_1 from "assets/img/step_1.png";
import step_2 from "assets/img/step_2.png";
import step_3 from "assets/img/step_3.png";
import carBtnImg from "assets/img/car.png";

import Header from "components/common/Header";
import ElecCarReport from "components/Main/ElecCarReport";
import HotPosts from "components/Main/HotPosts";
import UserWelcome from "components/Main/UserWelcome";
import Bot from "components/Main/ChatBot";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as UserApi from "apis/UserApi";
import * as StepApi from "apis/StepApi";
import * as CarRegisterApi from "apis/CarRegisterApi";

import { useNavigate } from "react-router-dom";

interface UserInfo {
  user_id: string;
  email: string;
  id: string;
  nickname: string;
  password: string;
  age: string;
  address: string;
  car_owned: boolean;
  elec_car_owend: boolean;
  createdAt?: string;
  updatedAt?: string;
}
interface CarProps {
  model: string;
  brand: string;
}

interface CarInfo {
  current: CarProps;
  recommended: CarProps;
}

const MainPage = () => {
  const stepImages = [step_0, step_1, step_2, step_3];
  const stepText = [
    "전기차 추천 과정이 준비되어있어요 :)",
    "현재 차량을 등록해주셨네요! :)",
    "성향 테스트를 완료해주셨네요! :)",
    "전기차 추천 결과를 확인해주세요 :)",
  ];
  const navigate = useNavigate();

  const [user, setUser] = useState<UserInfo>();
  const [step, setStep] = useState<{ step: string }>();
  const [car, setCar] = useState<CarInfo>();

  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const [dummyPosts, setDummyPosts] = useState([
    { userName: "더미 유저1", title: "더미 게시글 1" },
    { userName: "더미 유저2", title: "더미 게시글 1" },
    { userName: "더미 유저3", title: "더미 게시글 1" },
    { userName: "더미 유저4", title: "더미 게시글 1" },
    { userName: "더미 유저5", title: "더미 게시글 1" },
    { userName: "더미 유저1", title: "더미 게시글 1" },
    { userName: "더미 유저2", title: "더미 게시글 1" },
    { userName: "더미 유저3", title: "더미 게시글 1" },
    { userName: "더미 유저4", title: "더미 게시글 1" },
    { userName: "더미 유저5", title: "더미 게시글 1" },
  ]);
  const onChatBotToggle = () => {
    setChatbotOpen((c: boolean) => !c);
  };
  const userQuery = useQuery("user", UserApi.currentUserGet).data;
  const stepQuery = useQuery("step", StepApi.getStepInfo).data;
  const carQuery = useQuery("car", CarRegisterApi.getCarInfo).data;
  // console.log(carQuery);
  useEffect(() => {
    setUser(userQuery?.data);
    setStep(stepQuery?.data);
    setCar(carQuery?.data);
    console.log(user);
    console.log(car);
    if (sessionStorage.getItem("userToken") === undefined) {
      navigate("/login");
    }
  }, [userQuery, stepQuery, carQuery]);

  return (
    <MainPageWrapper>
      <Bot isVisible={isChatbotOpen} />
      <ChatBotButton isOpen={isChatbotOpen} onClick={onChatBotToggle}>
        {isChatbotOpen ? <XIcon>✕</XIcon> : <CarIcon src={carBtnImg} />}
      </ChatBotButton>
      <Header />
      <MainArea>
        <MainSectionTop>
          <SubSectionTop>
            {user && <UserWelcome userName={user.nickname}></UserWelcome>}
          </SubSectionTop>
          <SubSectionTop>
            {step && <ImageText>{stepText[parseInt(step.step)]}</ImageText>}
            {step && (
              <RecomendStepImage src={stepImages[parseInt(step.step)]} />
            )}
          </SubSectionTop>
        </MainSectionTop>
        <MainSectionBottom>
          <SubSectionBottom>
            <HotPosts></HotPosts>
          </SubSectionBottom>
          <SubSectionBottom>
            {car && <ElecCarReport car={car.recommended} />}
          </SubSectionBottom>
        </MainSectionBottom>
      </MainArea>
    </MainPageWrapper>
  );
};
export default MainPage;
const RecomendStepImage = styled.img`
  width: 500px;
  @media screen and (max-width: 720px) {
    width: 90vw;
  }
`;
const MainArea = styled.main`
  padding: 0 50px 0 50px;
  height: auto;
  @media screen and (max-width: 720px) {
    padding: 0px 10px;
  }
`;
const MainSectionTop = styled.section`
  height: calc(45vh - 60px);
  display: flex;
  justify-content: center;
  @media screen and (max-width: 720px) {
    justify-content: start;
    height: auto;
    flex-direction: column;
  }
  @media screen and (max-height: 720px) {
    height: auto;
  }
`;
const MainSectionBottom = styled.section`
  height: 55vh;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 720px) {
    justify-content: start;
    height: auto;
    flex-direction: column;
  }
  @media screen and (max-height: 720px) {
    height: auto;
  }
`;
const SubSectionTop = styled.section`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 720px) {
    height: auto;
    width: 100%;
    padding-top: 50px;
    flex-direction: column;
  }
`;
const SubSectionBottom = styled.section`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: Center;
  align-items: center;
  @media screen and (max-width: 720px) {
    height: auto;
    width: 100%;
    padding-top: 50px;
    flex-direction: column;
  }
`;
const MainPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    height: auto;
  }
`;

const ImageText = styled.span`
  font-size: 1.2em;
  color: black;
  margin: 50px 0 20px 0;
  font-weight: 600;
  @media screen and (max-width: 720px) {
    font-size: 1.1em;
  }
`;

const CarIcon = styled.img`
  width: 70%;
  height: auto;
`;
const XIcon = styled.span`
  width: 80%;
`;

const ChatBotButton = styled.button<{ isOpen: boolean }>`
  width: ${props => (props.isOpen ? "45px" : "60px")};
  height: ${props => (props.isOpen ? "45px" : "60px")};

  position: fixed;
  right: 3vw;
  bottom: 3vw;

  margin-top: 10px;
  border-radius: 35px;
  background-color: #0a84ff;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: salmon;
  }
  @media screen and (max-height: 719px) {
    display: none;
  }
  transition: 0.3s ease-in-out all;
`;
