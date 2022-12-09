import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { R } from "App";

interface propsTypes {
  userName: string;
}

const UserWelcome = ({ userName }: propsTypes) => {
  const navigate = useNavigate();
  const handleAddRefuelRecord = () => navigate(R.MYPAGE);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          width: "100%",
          height: "100%",
          padding: "30px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "2.2em", fontWeight: "600" }}>
          안녕하세요, <span style={{ color: "#0A84FF" }}>{userName}</span>님!
        </div>
        <div
          style={{
            fontSize: "1.2em",
            color: "#898989",
            margin: "50px 0 20px 0",
            fontWeight: "600",
          }}
        >
          최근에 주유 하셨나요?
        </div>
        <button
          style={{
            fontSize: "0.9em",
            color: "white",
            backgroundColor: "#898989",
            border: "none",
            borderRadius: "50px",
            padding: "8px 15px",
            width: "160px",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={handleAddRefuelRecord}
        >
          주유 기록 하러 가기
        </button>
      </div>
    </>
  );
};

export default UserWelcome;
