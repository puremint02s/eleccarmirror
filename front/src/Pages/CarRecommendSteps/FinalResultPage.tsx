import { useState, useEffect, useContext } from "react";
import { UserStateContext } from "App";
import Header from "components/common/Header";
import styled from "styled-components";
import BlueCarImg from "assets/img/BlueCar.png";
import GreyCarImg from "assets/img/GreyQuestionCar.png";
import Modal from "components/common/Modal";
import CarRecommendResult from "components/FinalRecommendReport/CarRecommendResult";
import CalcAverageEfficiency from "hooks/CalcAverageEfficiency";
import { carMbtiTypeGet } from "apis/CarMbtiTestApi";
import { getCarInfo } from "apis/CarRegisterApi";
import { MbtiRecommendCar } from "assets/data/MbtiRecommendCarList";
import {
  ListA,
  ListB,
  ListC,
  ListD,
  ListE,
  ListF,
  ListG,
  ListH,
  ListI,
} from "assets/data/RecommendElecCarList";

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
  const [currentUserMPGtype, setCurrentUserMPGtype] = useState("");
  const [recommendedIndex, setRecommendedIndex] = useState(0);

  const currentUser = useContext(UserStateContext);

  const currentUserCalcEfficiency = CalcAverageEfficiency(
    currentUser.user.user_id,
  );
  const currentUserCalcMPG =
    (currentUserCalcEfficiency.averageEfficiency / 1559) * 324;

  useEffect(() => {
    const i = currentUserCalcMPG;
    if (!isNaN(i)) {
      if (i < 3) {
        setCurrentUserMPGtype("A");
        setRecommendedIndex(Math.floor(Math.random() * (4 - 1) + 1));
      } else if (i >= 3 && i < 3.5) {
        setCurrentUserMPGtype("B");
        setRecommendedIndex(Math.floor(Math.random() * (4 - 1) + 1));
      } else if (i >= 3.5 && i < 4) {
        setCurrentUserMPGtype("C");
        setRecommendedIndex(Math.floor(Math.random() * (5 - 1) + 1));
      } else if (i >= 4 && i < 4.5) {
        setCurrentUserMPGtype("D");
        setRecommendedIndex(Math.floor(Math.random() * (12 - 1) + 1));
      } else if (i >= 4.5 && i < 5) {
        setCurrentUserMPGtype("E");
        setRecommendedIndex(Math.floor(Math.random() * (4 - 1) + 1));
      } else if (i >= 5 && i < 5.5) {
        setCurrentUserMPGtype("F");
        setRecommendedIndex(Math.floor(Math.random() * (6 - 1) + 1));
      } else if (i >= 5.5 && i < 6) {
        setCurrentUserMPGtype("G");
        setRecommendedIndex(1);
      } else if (i >= 6 && i < 6.5) {
        setCurrentUserMPGtype("H");
        setRecommendedIndex(1);
      } else if (i >= 6.5) {
        setCurrentUserMPGtype("I");
        setRecommendedIndex(1);
      }
    } else {
      setCurrentUserMPGtype("none");
    }
  }, []);

  useEffect(() => {
    async function getCurrentUserType() {
      const currentUserId = currentUser.user.user_id;
      const res = await carMbtiTypeGet(currentUserId);
      setUserMbtiType(res[0].type);
    }
    getCurrentUserType();
  }, []);

  useEffect(() => {
    async function setCurrentUserCarInfo() {
      const res = await getCarInfo();
      const carInformation = res?.data?.current;
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
                img={MbtiRecommendCar[userMbtiType].img}
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
              alt="현재 차량 이미지"
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
                img={GreyCarImg}
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
              alt="평균연비 이미지"
            />
            <p>{currentUserCalcEfficiency.averageEfficiency} km/L</p>
          </ResultButton>
          {calcEfficiencyRecommendResult && (
            <Modal
              closeModal={() =>
                setCalcEfficiencyRecommendResult(!calcEfficiencyRecommendResult)
              }
            >
              {currentUserMPGtype === "A" && (
                <CarRecommendResult
                  brand={ListA[recommendedIndex].brand}
                  model={ListA[recommendedIndex].model}
                  distance={ListA[recommendedIndex].distance}
                  battery={ListA[recommendedIndex].battery}
                  MPG={ListA[recommendedIndex].MPG}
                  cost={ListA[recommendedIndex].cost}
                  homepage={ListA[recommendedIndex].homepage}
                  img={ListA[recommendedIndex].img}
                />
              )}
              {currentUserMPGtype === "B" && (
                <CarRecommendResult
                  brand={ListB[recommendedIndex].brand}
                  model={ListB[recommendedIndex].model}
                  distance={ListB[recommendedIndex].distance}
                  battery={ListB[recommendedIndex].battery}
                  MPG={ListB[recommendedIndex].MPG}
                  cost={ListB[recommendedIndex].cost}
                  homepage={ListB[recommendedIndex].homepage}
                  img={ListB[recommendedIndex].img}
                />
              )}
              {currentUserMPGtype === "C" && (
                <CarRecommendResult
                  brand={ListC[recommendedIndex].brand}
                  model={ListC[recommendedIndex].model}
                  distance={ListC[recommendedIndex].distance}
                  battery={ListC[recommendedIndex].battery}
                  MPG={ListC[recommendedIndex].MPG}
                  cost={ListC[recommendedIndex].cost}
                  homepage={ListC[recommendedIndex].homepage}
                  img={ListC[recommendedIndex].img}
                />
              )}
              {currentUserMPGtype === "D" && (
                <CarRecommendResult
                  brand={ListD[recommendedIndex].brand}
                  model={ListD[recommendedIndex].model}
                  distance={ListD[recommendedIndex].distance}
                  battery={ListD[recommendedIndex].battery}
                  MPG={ListD[recommendedIndex].MPG}
                  cost={ListD[recommendedIndex].cost}
                  homepage={ListD[recommendedIndex].homepage}
                  img={ListD[recommendedIndex].img}
                />
              )}
              {currentUserMPGtype === "E" && (
                <CarRecommendResult
                  brand={ListE[recommendedIndex].brand}
                  model={ListE[recommendedIndex].model}
                  distance={ListE[recommendedIndex].distance}
                  battery={ListE[recommendedIndex].battery}
                  MPG={ListE[recommendedIndex].MPG}
                  cost={ListE[recommendedIndex].cost}
                  homepage={ListE[recommendedIndex].homepage}
                  img={ListE[recommendedIndex].img}
                />
              )}
              {currentUserMPGtype === "F" && (
                <CarRecommendResult
                  brand={ListF[recommendedIndex].brand}
                  model={ListF[recommendedIndex].model}
                  distance={ListF[recommendedIndex].distance}
                  battery={ListF[recommendedIndex].battery}
                  MPG={ListF[recommendedIndex].MPG}
                  cost={ListF[recommendedIndex].cost}
                  homepage={ListF[recommendedIndex].homepage}
                  img={ListF[recommendedIndex].img}
                />
              )}
              {currentUserMPGtype === "G" && (
                <CarRecommendResult
                  brand={ListG[1].brand}
                  model={ListG[1].model}
                  distance={ListG[1].distance}
                  battery={ListG[1].battery}
                  MPG={ListG[1].MPG}
                  cost={ListG[1].cost}
                  homepage={ListG[1].homepage}
                  img={ListG[1].img}
                />
              )}
              {currentUserMPGtype === "H" && (
                <CarRecommendResult
                  brand={ListH[1].brand}
                  model={ListH[1].model}
                  distance={ListH[1].distance}
                  battery={ListH[1].battery}
                  MPG={ListH[1].MPG}
                  cost={ListH[1].cost}
                  homepage={ListH[1].homepage}
                  img={ListH[1].img}
                />
              )}
              {currentUserMPGtype === "I" && (
                <CarRecommendResult
                  brand={ListI[1].brand}
                  model={ListI[1].model}
                  distance={ListI[1].distance}
                  battery={ListI[1].battery}
                  MPG={ListI[1].MPG}
                  cost={ListI[1].cost}
                  homepage={ListI[1].homepage}
                  img={ListI[1].img}
                />
              )}
              {currentUserMPGtype === "none" && (
                <>계산된 평균연비가 존재하지 않습니다.</>
              )}
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
  width: 200px;
  height: 200px;
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
