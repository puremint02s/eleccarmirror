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

  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const user = useQuery("user", UserApi.currentUserGet)?.data?.data;
  const step = useQuery("step", StepApi.getStepInfo)?.data?.data?.step;
  // const car = useQuery("car", CarRegisterApi.getCarInfo)?.data?.data;

  const onChatBotToggle = () => {
    setChatbotOpen((c: boolean) => !c);
  };
  useEffect(() => {
    if (step === null) {
      StepApi.postStepInfo("0");
    }
  }, [step]);
  return (
    <>
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
              {step ? (
                <ImageText>{stepText[parseInt(step)]}</ImageText>
              ) : (
                <ImageText>{stepText[0]}</ImageText>
              )}
              {step ? (
                <RecomendStepImage src={stepImages[parseInt(step)]} />
              ) : (
                <RecomendStepImage src={stepImages[0]} />
              )}
            </SubSectionTop>
          </MainSectionTop>
          <MainSectionBottom>
            <SubSectionBottom>
              <HotPosts></HotPosts>
            </SubSectionBottom>
            <SubSectionBottom>
              {step && <ElecCarReport step={step} />}
            </SubSectionBottom>
          </MainSectionBottom>
        </MainArea>
      </MainPageWrapper>
      <BG>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,160C840,171,960,245,1080,234.7C1200,224,1320,128,1380,80L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </BG>
      <BG2></BG2>
    </>
  );
};
export default MainPage;
const BG = styled.div`
  position: fixed;
  padding: 0;
  z-index: -3;
  bottom: -10px;
  width: 100vw;
  height: auto;
  svg {
    margin: 0px;
  }
`;
const BG2 = styled.div`
  position: fixed;
  z-index: -5;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: whitesmoke;
`;
const RecomendStepImage = styled.img`
  width: 500px;
  @media screen and (max-width: 720px) {
    width: 90vw;
  }
  @media screen and (max-height: 719px) {
    width: 100%;
  }
`;
const MainArea = styled.main`
  height: auto;
  padding: 0 10vw;
  box-sizing: border-box;
  @media screen and (min-width: 1440px) {
    padding: 0 15vw;
  }
  @media screen and (max-width: 720px) {
    padding: 0px 10px;
  }
  @media screen and (max-height: 719px) {
    padding: 0 0;
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
  width: 50%;
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
  @media screen and (max-height: 719px) {
    font-size: 1em;
  }
`;
const MainPageWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    height: auto;
  }
  @media screen and (max-height: 719px) {
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
  background-color: salmon;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: 0a84ff;
  }
  // @media screen and (max-height: 719px) {
  //   display: none;
  // }
  transition: 0.3s ease-in-out all;
`;
