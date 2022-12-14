import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import SocialShare from "hooks/SocialShareHook";
import { getCarInfo, updateCarInfo } from "apis/CarRegisterApi";

interface CarData {
  brand: string;
  model: string;
  distance: number;
  battery: number;
  MPG: number;
  cost: number;
  homepage: string;
  img?: string;
}

interface CarProps {
  model: string;
  brand: string;
}

interface CarInfo {
  current: CarProps;
  recommended: CarProps;
}

function CarRecommendResult({ ...props }: CarData) {
  const [currentCarModel, setCurrentCarModel] = useState("");
  const [currentCarBrand, setCurrentCarBrand] = useState("");

  useEffect(() => {
    async function getCurrentCar() {
      const res = await getCarInfo();
      setCurrentCarModel(res.data.current.model);
      setCurrentCarBrand(res.data.current.brand);
    }
    getCurrentCar();
  }, []);

  const postSelectRecommendedCar = () => {
    const recommendedResult: CarInfo = {
      current: {
        model: currentCarModel,
        brand: currentCarBrand,
      },
      recommended: {
        model: props.model,
        brand: props.brand,
      },
    };
    updateCarInfo(recommendedResult);
    alert("나의 추천 차량이 등록되었습니다.");
  };

  const navigate = useNavigate();
  const handleClickBrandHomepage = () => window.open(props.homepage);
  const handleClickMain = () => navigate("/main");

  return (
    <>
      <RecommendResultWrapper>
        <RecommendResultContentWrapper>
          <RecommendResultTitle>나에게 맞는 전기차는?</RecommendResultTitle>
          <RecommendResultCarImage src={props.img} alt="추천 차량 이미지" />
          <RecommendResultContent>
            제조사: {props.brand} <br />
            모델: {props.model} <br />
            1회 충전시 주행거리: {props.distance}km <br />
            배터리 용량: {props.battery}kWh <br />
            전비: {props.MPG}km/kWh <br />
            가격: {props.cost}원 ~
          </RecommendResultContent>
          <GotoBrandHompageButton onClick={handleClickBrandHomepage}>
            공식 홈페이지 <br /> 방문
          </GotoBrandHompageButton>
          <SelectRecommendedCarButton onClick={postSelectRecommendedCar}>
            추천 차량으로 <br /> 선택하기
          </SelectRecommendedCarButton>
          <GotoMainButton onClick={handleClickMain}>
            메인으로 <br /> 이동
          </GotoMainButton>
          <SocialShare />
        </RecommendResultContentWrapper>
      </RecommendResultWrapper>
    </>
  );
}

export default CarRecommendResult;

const RecommendResultWrapper = styled.div`
  flex-direction: column;
  text-align: center;
`;

const RecommendResultContentWrapper = styled.div`
  width: 400px;
  display: inline-block;
`;

const RecommendResultTitle = styled.p`
  font-size: 25px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-weight: bold;
`;

const RecommendResultContent = styled.p`
  padding-top: 30px;
  text-align: left;
  line-height: 1.8rem;
`;

const RecommendResultCarImage = styled.img`
  width: 150px;
`;

const GotoBrandHompageButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #898989;
  font-size: 14px;
  text-align: center;
  width: 25%;
  cursor: pointer;
  background-color: #f6f6f6;
  margin-top: 1rem;
  display: inline-block;
  margin-right: 1rem;
  &:hover {
    background-color: #0a84ff;
    color: white;
    transition: 0.5s;
  }
`;

const SelectRecommendedCarButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  width: 25%;
  cursor: pointer;
  margin-top: 1rem;
  margin-right: 1rem;
  display: inline-block;
  color: #898989;
  background-color: #f6f6f6;
  &:hover {
    background-color: #0a84ff;
    color: white;
    transition: 0.5s;
  }
`;

const GotoMainButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  width: 25%;
  cursor: pointer;
  color: #898989;
  background-color: #f6f6f6;
  margin-top: 1rem;
  display: inline-block;
  &:hover {
    background-color: #0a84ff;
    color: white;
    transition: 0.5s;
  }
`;
