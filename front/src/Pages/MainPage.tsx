import styled from "styled-components/macro";
import step from "assets/img/step_1.png";
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
  const onChatBotOpen = () => {
    setChatbotOpen(c => !c);
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BotWrapper>
          {isChatbotOpen && <Bot></Bot>}
          {isChatbotOpen ? (
            <ChatBotCloseButton onClick={onChatBotOpen}>
              <XIcon>✕</XIcon>
            </ChatBotCloseButton>
          ) : (
            <ChatBotOpenButton onClick={onChatBotOpen}>
              <CarIcon src={car} />
            </ChatBotOpenButton>
          )}
        </BotWrapper>
        <Header />
        <Main>
          <div
            style={{
              height: "calc(50vh - 80px)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "50vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UserWelcome userName={userName}></UserWelcome>
            </div>
            <div
              style={{
                width: "50vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              {/* 유저 차량 추천 과정을 나타내는 state에 따라 이미지 변경 */}
              <img style={{ width: "500px", margin: "30px" }} src={step}></img>
            </div>
          </div>
          <div
            style={{
              height: "50vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "50vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HotPosts dummyPosts={dummyPosts}></HotPosts>
            </div>
            <div
              style={{
                width: "50vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ElecCarReport></ElecCarReport>
            </div>
          </div>
        </Main>
      </div>
    </>
  );
};
export default MainPage;
const Main = styled.main`
  padding: 0 50px 0 50px;
`;

const SubSectionCenterBottom = styled.section`
  width: "50vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
`;

const BotWrapper = styled.div`
  position: fixed;
  right: 70px;
  bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CarIcon = styled.img`
  width: 40px;
  height: 40px;
`;
const XIcon = styled.span`
  width: 40px;
`;

const ChatBotOpenButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #0a84ff;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: salmon;
  }
  transition: 0.3s ease-in-out;
`;
const ChatBotCloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 35px;
  background-color: grey;
  color: white;
  font-size: 16px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: red;
  }
  transition: 0.3s ease-in-out;
`;
