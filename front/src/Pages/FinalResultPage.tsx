import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/common/Header";
import SocialShare from "hooks/SocialShareHook";
import styled from "styled-components";
import BlueCarImg from "assets/img/BlueCar.png";

interface CarData {
  brand: string;
  model: string;
  distance: number;
  battery: number;
  MPG: number;
  cost: number;
  homepage: string;
}

const dummyUserData = {
  mbti: "CFBH",
  efficiency: 10,
};

const dummyCarData: CarData = {
  brand: "테슬라",
  model: "model X",
  distance: 527,
  battery: 84.9,
  MPG: 6.2,
  cost: 5999,
  homepage: "https://www.tesla.com/",
};

function FinalResultPage() {
  const navigate = useNavigate();
  const handleClickBrandHomepage = () => window.open(dummyCarData.homepage);
  const handleClickMain = () => navigate("/"); // 메인 페이지로 수정하기

  return (
    <>
      <Header />
      <TitleWrapper>나에게 맞는 전기차는?</TitleWrapper>
      <ResultWrapper>
        <ResultButtonWrapper>
          <ResultButtonTitleWrapper>
            나의 성향으로 추천
          </ResultButtonTitleWrapper>
          <ResultButton>
            <img
              style={{ width: 100, paddingBottom: 15 }}
              src={BlueCarImg}
              alt="유형 이미지"
            />
            <p>{dummyUserData.mbti}</p>
          </ResultButton>
        </ResultButtonWrapper>
        <ResultButtonWrapper>
          <ResultButtonTitleWrapper>
            나의 현재 차량으로 추천
          </ResultButtonTitleWrapper>
          <ResultButton>
            <img
              style={{ width: 100 }}
              src={BlueCarImg}
              alt="추천 차량 이미지"
            />
          </ResultButton>
        </ResultButtonWrapper>
        <ResultButtonWrapper>
          <ResultButtonTitleWrapper>
            나의 운전 습관으로 추천
          </ResultButtonTitleWrapper>
          <ResultButton>
            <p>평균연비</p>
            <p>{dummyUserData.efficiency} km/L</p>
          </ResultButton>
        </ResultButtonWrapper>
      </ResultWrapper>
      <RecommendResultWrapper>
        <RecommendResultContentWrapper>
          <img style={{ width: 150 }} src={BlueCarImg} alt="추천 차량 이미지" />
          <div style={{ paddingTop: 30, paddingBottom: 30 }}>
            <RecommendResultContent>
              제조사: {dummyCarData.brand}
            </RecommendResultContent>
            <RecommendResultContent>
              모델: {dummyCarData.model}
            </RecommendResultContent>
            <RecommendResultContent>
              주행거리: {dummyCarData.distance}km
            </RecommendResultContent>
            <RecommendResultContent>
              배터리용량: {dummyCarData.battery}kWh
            </RecommendResultContent>
            <RecommendResultContent>
              전비: {dummyCarData.MPG}km/kWh
            </RecommendResultContent>
            <RecommendResultContent>
              가격: {dummyCarData.cost}만원
            </RecommendResultContent>
          </div>
          <GotoBrandHompageButton onClick={handleClickBrandHomepage}>
            공식 홈페이지 방문
          </GotoBrandHompageButton>
          <GotoMainButton onClick={handleClickMain}>
            메인으로 이동
          </GotoMainButton>
          <SocialShare />
        </RecommendResultContentWrapper>
      </RecommendResultWrapper>
    </>
  );
}

export default FinalResultPage;

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
`;

const ResultWrapper = styled.div`
  text-align: center;
`;

const ResultButtonWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
  display: inline-block;
  padding: 2rem;
`;

const ResultButtonTitleWrapper = styled.p`
  text-align: center;
  font-size: 16px;
`;

export const ResultButton = styled.button`
  padding: 40px;
  font-size: 16px;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 28px;
  background-color: white;
  border-style: solid;
  border-color: lightgrey;
  display: inline-block;
  &:hover {
    border-color: #0a84ff;
    transition: 0.5s;
  }
`;

export const RecommendResultWrapper = styled.div`
  flex-direction: column;
  text-align: center;
`;

export const RecommendResultContentWrapper = styled.div`
  width: 280px;
  display: inline-block;
`;

export const RecommendResultContent = styled.p`
  padding-top: 0.5rem;
  text-align: left;
`;

export const GotoBrandHompageButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #898989;
  font-size: 14px;
  text-align: center;
  width: 130px;
  cursor: pointer;
  background-color: #f6f6f6;
  margin-top: 1rem;
  display: inline-block;
  margin-right: 1rem;
`;

export const GotoMainButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  width: 130px;
  cursor: pointer;
  color: white;
  background-color: #0a84ff;
  margin-top: 1rem;
  display: inline-block;
`;
