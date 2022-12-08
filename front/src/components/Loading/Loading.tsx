import * as L from "style/LoadingStyle";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlueCarImg from "assets/img/BlueCar.png";
import "style/app.css";

function Loading() {
  const [carName, setCarName] = useState<string>("");

  //   useEffect(() => {
  //     const carName = Object.values(CAR).find(value => value === car);
  //     if (!carName) return navigate("/404");
  //     setCarName(carName);
  //   }, [car, navigate]);

  return (
    <>
      <L.LoadingTitle>전기차의 장점</L.LoadingTitle>
      <L.ContentTitle>친환경적</L.ContentTitle>
      <L.ContentText>
        - 주행시 화석연료를 사용하지 않아 CO2나 NOx를 배출하지 않음
      </L.ContentText>
      <L.ContentText>- 엔진 소음이 적고, 진동이 적음</L.ContentText>
      <L.ContentTitle>경제적</L.ContentTitle>
      <L.ContentText>
        - 전기모터로만 구동할 경우 운행비용이 가장 저렴하고, 심야 전기를 이요할
        경우 비용을 더 낮출 수 있음
      </L.ContentText>
      <L.ContentText>- 차량 수명이 상대적으로 김</L.ContentText>
      <L.ContentTitle>안전성</L.ContentTitle>
      <L.ContentText>- 사고 시 폭발의 위험성이 적음</L.ContentText>
      <L.ContentTitle>편의성</L.ContentTitle>
      <L.ContentText>- 심야 전력으로 자택에서 충전 가능</L.ContentText>
      <L.ContentText>
        - 기어를 바꿔줄 필요가 없어 운전 조작이 간편
      </L.ContentText>
      <div className="loading">
        <img src={BlueCarImg} />
      </div>
    </>
  );
}

export default Loading;
