import styled from "styled-components";

import { Link } from "react-router-dom";
import LogoImg from "assets/img/MyElecCar logo.png";
import StartBG from "assets/img/StartPage bg.png";

const StartPage = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <LeftArea>
          <img style={{ width: 320 }} src={LogoImg} alt="서비스 로고" />
          <span
            style={{
              fontSize: "30px",
              marginTop: "150px",
              marginBottom: "20px",
            }}
          >
            나에게 딱 맞는 전기차 찾기!
          </span>
          <span
            style={{
              fontSize: "18px",
              color: "#898989",
              marginBottom: "150px",
            }}
          >
            현재 나의 차, 성향, 주유기록을 통해 나에게 딱 맞는 전기차를
            찾아볼까요?
          </span>
          <Link to="/login">
            <BlueBotton>로그인</BlueBotton>
          </Link>
          <Link to="/signup">
            <BlueBorderBotton
              style={{
                fontSize: "18px",
                color: "#0A84FF",
                width: "300px",
                height: "50px",
                backgroundColor: "white",
                border: "1px solid #0A84FF",
                borderRadius: "28px",
                margin: "15px",
              }}
            >
              5초 회원가입 후 찾으러 가기
            </BlueBorderBotton>
          </Link>
        </LeftArea>
        <RightArea style={{ width: "45vw", height: "100%" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={StartBG}
            alt="메인페이지 우측 배경"
          />
        </RightArea>
      </div>
    </>
  );
};
export default StartPage;

const RightArea = styled.div`
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55vw;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 720px) {
    width: 100vw;
  }
`;
const BlueBotton = styled.button`
  font-size: 18px;
  color: white;
  width: 300px;
  height: 50px;
  background-color: #0a84ff;
  border: 1px solid #0a84ff;
  border-radius: 28px;
  margin: 15px;
`;
const BlueBorderBotton = styled.button`
  font-size: 18px;
  color: white;
  width: 300px;
  height: 50px;
  background-color: white;
  border: 1px solid #0a84ff;
  border-radius: 28px;
  margin: 15px;
`;
