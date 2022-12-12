import styled from "styled-components/macro";
import step from "assets/img/step_0.png";
import car from "assets/img/car.png";

import Header from "components/common/Header";
import ElecCarReport from "components/Main/ElecCarReport";
import HotPosts from "components/Main/HotPosts";
import UserWelcome from "components/Main/UserWelcome";
import Bot from "components/Main/ChatBot";

import { useState } from "react";

const MainPage = () => {
  //react query를 통해 유저 정보, 게시글 정보를 불러온다.
  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const [userName, setUserName] = useState("최은오");
  const [dummyPosts, setDummyPosts] = useState([
    { userName: "더미 유저1", title: "더미 게시글 1" },
    { userName: "더미 유저2", title: "더미 게시글 1" },
    { userName: "더미 유저3", title: "더미 게시글 1" },
    { userName: "더미 유저4", title: "더미 게시글 1" },
    { userName: "더미 유저5", title: "더미 게시글 1" },
    { userName: "더미 유저6", title: "더미 게시글 1" },
    { userName: "더미 유저7", title: "더미 게시글 1" },
  ]);
  const onChatBotToggle = () => {
    setChatbotOpen((c: boolean) => !c);
  };

  return (
    <MainPageWrapper>
      <BotWrapper>
        <Bot isVisible={isChatbotOpen} />
        <ChatBotButton isOpen={isChatbotOpen} onClick={onChatBotToggle}>
          {isChatbotOpen ? <XIcon>✕</XIcon> : <CarIcon src={car} />}
        </ChatBotButton>
      </BotWrapper>
      <Header />
      <Main>
        <MainSectionTop>
          <SubSectionTop>
            <UserWelcome userName={userName}></UserWelcome>
          </SubSectionTop>
          <SubSectionTop>
            <span>전기차 추천 과정을 완료해주세요 :)</span>
            <img style={{ width: "600px" }} src={step}></img>
          </SubSectionTop>
        </MainSectionTop>
        <MainSectionBottom>
          <SubSectionBottom>
            <HotPosts dummyPosts={dummyPosts}></HotPosts>
          </SubSectionBottom>
          <SubSectionBottom>
            <ElecCarReport></ElecCarReport>
          </SubSectionBottom>
        </MainSectionBottom>
      </Main>
    </MainPageWrapper>
  );
};
export default MainPage;
const Main = styled.main`
  padding: 0 50px 0 50px;
`;
const MainSectionTop = styled.section`
  height: calc(50vh - 80px);
  display: flex;
  justify-content: center;
`;
const MainSectionBottom = styled.section`
  height: 50vh;
  display: flex;
  justify-content: center;
`;
const SubSectionTop = styled.section`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;
const SubSectionBottom = styled.section`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: Center;
  align-items: center;
`;
const MainPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const BotWrapper = styled.div`
  position: fixed;
  right: 70px;
  bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

const CarIcon = styled.img`
  width: 80%;
  height: auto;
`;
const XIcon = styled.span`
  width: 80%;
`;

const ChatBotButton = styled.button<{ isOpen: boolean }>`
  width: ${props => (props.isOpen ? "40px" : "60px")};
  height: ${props => (props.isOpen ? "40px" : "60px")};
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
  transition: 0.3s ease-in-out all;
`;
