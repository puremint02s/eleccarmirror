import { useState, useEffect } from "react";
import Header from "components/common/Header";
import styled from "styled-components";
import BlueCarImg from "assets/img/BlueCar.png";
import Modal from "components/common/Modal";
import CarRecommendResult from "components/FinalRecommendReport/CarRecommendResult";
import CalcAverageEfficiency from "hooks/CalcAverageEfficiency";
import { carMbtiTypeGet } from "apis/CarMbtiTestApi";
import { getUserCarInfo } from "apis/CarInfoApi";
import { MbtiRecommendCar } from "assets/data/MbtiRecommendCar";

interface CarData {
  brand: string;
  model: string;
  distance: number;
  battery: number;
  MPG: number;
  cost: number;
  homepage: string;
}

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
  const [mbtiRecommendResult, setMbtiRecommendResult] = useState(false);
  const [userCarRecommendResult, setUserCarRecommendResult] = useState(false);
  const [calcEfficiencyRecommendResult, setCalcEfficiencyRecommendResult] =
    useState(false);
  const [userMbtiType, setUserMbtiType] = useState("");
  const [currentCarModel, setCurrentCarModel] = useState("");

  const currentUserCalcEfficiency = CalcAverageEfficiency(
    "70b691cb-c989-4503-86a2-f17dc87b77b8",
  );
  const userId = "70b691cb-c989-4503-86a2-f17dc87b77b8";

  useEffect(() => {
    async function getCurrentUserType() {
      const currentUserId = { userId };
      const res = await carMbtiTypeGet(currentUserId);
      setUserMbtiType(res[0].type);
    }
    getCurrentUserType();
  }, []);

  useEffect(() => {
    async function setCurrentUserCarInfo() {
      const res = await getUserCarInfo();
      const carInformation = res.data.current;
      if (carInformation) {
        setCurrentCarModel(carInformation.model);
      }
    }
    setCurrentUserCarInfo();
  }, []);

  return (
    <>
      <Header />
      <TitleWrapper>나에게 맞는 전기차는?</TitleWrapper>
      <ResultWrapper>
        <ResultButtonWrapper>
          <ResultButtonTitleWrapper>
            나의 성향으로 추천
          </ResultButtonTitleWrapper>
          <ResultButton
            onClick={() => setMbtiRecommendResult(!mbtiRecommendResult)}
          >
            <img
              style={{ width: 100, paddingBottom: 15 }}
              src={BlueCarImg}
              alt="유형 이미지"
            />
            <p>{userMbtiType}</p>
          </ResultButton>
          {mbtiRecommendResult && (
            <Modal
              closeModal={() => setMbtiRecommendResult(!mbtiRecommendResult)}
            >
              <CarRecommendResult
                brand={MbtiRecommendCar[userMbtiType].brand}
                model={MbtiRecommendCar[userMbtiType].model}
                distance={MbtiRecommendCar[userMbtiType].distance}
                battery={MbtiRecommendCar[userMbtiType].battery}
                MPG={MbtiRecommendCar[userMbtiType].MPG}
                cost={MbtiRecommendCar[userMbtiType].cost}
                homepage={MbtiRecommendCar[userMbtiType].homepage}
              />
            </Modal>
          )}
        </ResultButtonWrapper>
        <ResultButtonWrapper>
          <ResultButtonTitleWrapper>
            현재 차량으로 추천
          </ResultButtonTitleWrapper>
          <ResultButton
            onClick={() => setUserCarRecommendResult(!userCarRecommendResult)}
          >
            <img
              style={{ width: 100, paddingBottom: 15 }}
              src={BlueCarImg}
              alt="유형 이미지"
            />
            <p>{currentCarModel}</p>
          </ResultButton>
          {userCarRecommendResult && (
            <Modal
              closeModal={() =>
                setUserCarRecommendResult(!userCarRecommendResult)
              }
            >
              <CarRecommendResult
                brand={dummyCarData.brand}
                model={dummyCarData.model}
                distance={dummyCarData.distance}
                battery={dummyCarData.battery}
                MPG={dummyCarData.MPG}
                cost={dummyCarData.cost}
                homepage={dummyCarData.homepage}
              />
            </Modal>
          )}
        </ResultButtonWrapper>
        <ResultButtonWrapper>
          <ResultButtonTitleWrapper>평균 연비로 추천</ResultButtonTitleWrapper>
          <ResultButton
            onClick={() =>
              setCalcEfficiencyRecommendResult(!calcEfficiencyRecommendResult)
            }
          >
            <img
              style={{ width: 100, paddingBottom: 15 }}
              src={BlueCarImg}
              alt="유형 이미지"
            />
            <p>{currentUserCalcEfficiency} km/L</p>
          </ResultButton>
          {calcEfficiencyRecommendResult && (
            <Modal
              closeModal={() =>
                setCalcEfficiencyRecommendResult(!calcEfficiencyRecommendResult)
              }
            >
              <CarRecommendResult
                brand={dummyCarData.brand}
                model={dummyCarData.model}
                distance={dummyCarData.distance}
                battery={dummyCarData.battery}
                MPG={dummyCarData.MPG}
                cost={dummyCarData.cost}
                homepage={dummyCarData.homepage}
              />
            </Modal>
          )}
        </ResultButtonWrapper>
      </ResultWrapper>
    </>
  );
}

export default FinalResultPage;

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
  font-weight: 500;
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
