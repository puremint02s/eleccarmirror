import React from "react";
import "../style/app.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "55vw",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "60%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              style={{ width: 320 }}
              src="img/MyElecCar logo.png"
              alt="서비스 로고"
            />
            <span
              style={{
                fontSize: "30px",
                marginTop: "100px",
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
              <button
                style={{
                  fontSize: "18px",
                  color: "white",
                  width: "300px",
                  height: "50px",
                  backgroundColor: "#0A84FF",
                  border: "1px solid #0A84FF",
                  borderRadius: "28px",
                  marginBottom: "30px",
                }}
              >
                로그인
              </button>
            </Link>
            <Link to="/signup">
              <button
                style={{
                  fontSize: "18px",
                  color: "#0A84FF",
                  width: "300px",
                  height: "50px",
                  backgroundColor: "white",
                  border: "1px solid #0A84FF",
                  borderRadius: "28px",
                }}
              >
                5초 회원가입 후 찾으러 가기
              </button>
            </Link>
          </div>
        </div>
        <div style={{ width: "45vw", height: "100%" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="img/mainPage bg.png"
            alt="메인페이지 우측 배경"
          />
        </div>
      </div>
    </>
  );
};
export default MainPage;
