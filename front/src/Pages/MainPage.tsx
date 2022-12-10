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
          {isChatbotOpen ? (
            <ChatBotCloseButton onClick={onChatBotOpen}>✕</ChatBotCloseButton>
          ) : (
            <ChatBotOpenButton onClick={onChatBotOpen}>
              <CarIcon src={car} />
            </ChatBotOpenButton>
          )}
          {isChatbotOpen && <Bot></Bot>}
        </BotWrapper>
        <Header></Header>
        <div
          style={{
            height: "40vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <UserWelcome userName={userName}></UserWelcome>
          </div>
          <div
            style={{
              width: "40vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            {/* 유저 차량 추천 과정을 나타내는 state에 따라 이미지 변경 */}
            <img style={{ width: "320px", margin: "30px" }} src={step}></img>
          </div>
        </div>
        <div
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HotPosts dummyPosts={dummyPosts}></HotPosts>
          </div>
          <div
            style={{
              width: "40vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ElecCarReport></ElecCarReport>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPage;

const BotWrapper = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CarIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const ChatBotOpenButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #0a84ff;
  color: white;
  font-size: 24px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChatBotCloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 35px;
  background-color: grey;
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
