import styled from "styled-components/macro";
import React, { useEffect, useState } from "react";
import question from "assets/img/QuestionCar.png";
import loading from "assets/img/loading2.gif";
import tempImage from "assets/img/GreyQuestionCar.png";
import Chart from "./Chart";
import { useNavigate } from "react-router-dom";
import dic from "assets/data/dic2.json";
import * as StepApi from "apis/StepApi";
import * as CarRegisterApi from "apis/CarRegisterApi";

interface propsTypes {
  predictionList: Array<number>;
  fileName: string;
  setPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface data {
  label: string;
  value: number;
}

interface CarProps {
  model: string;
  brand: string;
}

interface CarInfo {
  current: CarProps;
  recommended: CarProps;
}

const CarConfirmPopup = ({
  fileName,
  predictionList,
  setPopUpOpen,
}: propsTypes) => {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState<data[]>();
  const [isLoading, setLoading] = useState(true);
  const [isAnalysisTabOpen, setAnalysisTabToggle] = useState(false);

  const onAnalysisTabToggle = () => {
    setAnalysisTabToggle(c => !c);
  };
  const otherCarSelect = (label: string) => {
    if (label) {
      console.log(label);
      const tempCar: CarInfo = {
        current: {
          model: label.split(" ")[1],
          brand: label.split(" ")[0],
        },
        recommended: {
          model: label.split(" ")[1],
          brand: label.split(" ")[0],
        },
      };
      CarRegisterApi.updateCarInfo(tempCar);
      StepApi.updateStepInfo("1");
      navigate("/test");
    }
  };
  const finishCarRegister = () => {
    if (chartData) {
      const tempCar: CarInfo = {
        current: {
          model: chartData[0].label.split(" ")[1],
          brand: chartData[0].label.split(" ")[0],
        },
        recommended: {
          model: chartData[0].label.split(" ")[1],
          brand: chartData[0].label.split(" ")[0],
        },
      };
      console.log(tempCar);
      CarRegisterApi.updateCarInfo(tempCar);
      StepApi.updateStepInfo("1");
      navigate("/test");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (fileName && predictionList) {
      const values: Array<string> = Object.keys(dic);
      const keys: Array<number> = Object.values(dic);
      const result = keys.map(v => ({
        label: values[v],
        value: predictionList[v] * 100,
      }));
      result.sort((a, b) => b.value - a.value);
      const chartData = [...result].splice(0, 4);
      chartData.push({
        label: "etc",
        value:
          100 -
          chartData[0].value -
          chartData[1].value -
          chartData[2].value -
          chartData[3].value,
      });
      setChartData(chartData);
    }
  }, [predictionList]);
  return (
    <>
      <CloseBtn
        onClick={() => {
          setPopUpOpen(false);
        }}
      >
        ✕
      </CloseBtn>
      {
        <PopUpWrapper
          onClick={() => {
            setPopUpOpen(false);
          }}
        >
          {isLoading ? (
            <PopUp
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <LoadingWrapper>
                <LoadingImageWrapper>
                  <LoadingImage src={question} alt="로딩 이미지" />
                  <LoadingGif src={loading} alt="로딩 GIF" />
                </LoadingImageWrapper>
                <LoadingText>차량 사진으로 브랜드와 모델 파악중...</LoadingText>
              </LoadingWrapper>
            </PopUp>
          ) : !isAnalysisTabOpen ? (
            <PopUp
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <ResultWrapper>
                <ResultTitleText>이 차가 맞나요?</ResultTitleText>
                <ResultImage
                  src={`
                  currentCarImages/${chartData[0].label.split(" ")[1]}.png`}
                />
                {/* vm에 저장해둔 분류 모델 이미지가 나와야 합니다. */}
                <ResultText>
                  <span>제조사</span>
                  <span>{chartData && chartData[0].label.split(" ")[0]}</span>
                </ResultText>
                <ResultText>
                  <span>모델</span>
                  <span>{chartData && chartData[0].label.split(" ")[1]}</span>
                </ResultText>
                <ResultText>
                  <span>AI 분석 확률</span>
                  <span>{chartData && chartData[0].value.toFixed(2)}%</span>
                </ResultText>
                <ButtonWrapper>
                  <BlueBoderButton
                    onClick={() => {
                      setPopUpOpen(false);
                    }}
                  >
                    다시하기
                  </BlueBoderButton>
                  <BlueButton onClick={finishCarRegister}>
                    나의 유형 테스트<br></br>하러가기
                  </BlueButton>
                </ButtonWrapper>
                <ResultSubTitleText onClick={onAnalysisTabToggle}>
                  📊 AI 분석결과 확인하기
                </ResultSubTitleText>
              </ResultWrapper>
            </PopUp>
          ) : (
            <PopUpScroll
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <ResultWrapper>
                <ResultTitleText>분석 결과</ResultTitleText>
                <ResultSubTitleText>내가 업로드한 사진</ResultSubTitleText>
                <UploadImage
                  src={`${process.env.REACT_APP_BACK_SERVER_URL}/${fileName}`}
                />
                <ResultSubTitleText>AI가 분석한 유사도</ResultSubTitleText>
                <ResultTextCenter>
                  AI가 유사하다고 판단한 상위 4개 모델입니다. 만약 리스트에 나의
                  차량이 없다면 가장 유사하다고 판단되는 차량을 리스트에서
                  골라주세요 :)
                </ResultTextCenter>
                {chartData && <Chart chartData={chartData} />}
                {/* (v.label)=>{otherCarSelect(v.label);} */}
                <ResultWrapper>
                  {chartData &&
                    chartData.map((v: data) => (
                      <ResultText2 key={v.value}>
                        <span
                          className={v.label}
                          onClick={e => {
                            otherCarSelect(e.currentTarget.innerHTML);
                          }}
                        >
                          {v.label}
                        </span>
                        <span>{v.value.toFixed(2)}%</span>
                      </ResultText2>
                    ))}
                </ResultWrapper>

                <ButtonWrapper>
                  <BlueBoderButton onClick={onAnalysisTabToggle}>
                    뒤로 가기
                  </BlueBoderButton>
                  <BlueButton onClick={finishCarRegister}>
                    나의 유형 테스트<br></br>하러가기
                  </BlueButton>
                </ButtonWrapper>
              </ResultWrapper>
            </PopUpScroll>
          )}
        </PopUpWrapper>
      }
    </>
  );
};
const CloseBtn = styled.button`
  position: fixed;
  top: 8vh;
  font-size: 24px;
  z-index: 9999;
  font-weight: 800;
  background-color: rgba(0, 0, 0, 0);
  transition: all ease-in-out 0.3s;
  &:hover {
    color: red;
  }
`;
const ResultImage = styled.img`
  width: 400px;
  height: 250px;
  // object-fit: cover;
  object-fit: contain;
  padding: 20px;
`;
const UploadImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  padding: 20px;
`;

const PopUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0px;
  left: 0px;
`;
const PopUp = styled.div`
  overflow: hidden;
  scrollbar-width: none;
  width: 600px;
  height: 750px;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;

  border-radius: 10px;
  padding: 50px;
  box-sizing: border-box;

  @media screen and (max-width: 720px) {
    width: 90vw;
    height: 90vh;
  }
  @media screen and (max-height: 719px) {
    width: 90vw;
    height: 90vh;
    overflow: scroll;
  }
`;
const PopUpScroll = styled.div`
  overflow: scroll;
  scrollbar-width: none;
  width: 600px;
  height: 750px;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;

  border-radius: 10px;
  padding: 50px;
  box-sizing: border-box;
  @media screen and (max-width: 720px) {
    padding: 10px;
    width: 90vw;
    height: 90vh;
  }
  @media screen and (max-height: 719px) {
    width: 90vw;
    height: 90vh;
    overflow: scroll;
  }
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoadingImageWrapper = styled.div`
  // display: flex;
  // width: auto;
  // align-items: end;
`;
const LoadingImage = styled.img`
  width: 150px;
  height: auto;
`;
const LoadingGif = styled.img`
  width: 70px;
  height: auto;
`;
const LoadingText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 50px;
  color: #898989;
`;

const ResultWrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
const ResultTitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  margin: 20px;
`;
const ResultSubTitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin: 30px;
  color: #0a84ff;
`;

const ResultText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 300px;
  font-size: 18px;
  font-weight: 400;
  margin: 5px;
  span {
    padding-right: 5px;
  }
  span:first-child {
    font-weight: 600;
  }
`;
const ResultTextCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 400px;
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 40px 0;
  line-height: 36px;
  @media screen and (max-width: 720px) {
    width: 70vw;
  }
`;
const ResultText2 = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  font-size: 18px;
  font-weight: 400;
  margin: 5px;
  span {
    padding-right: 5px;
  }
  span:first-child {
    font-weight: 600;
  }
  &:hover {
    color: salmon;
  }
  transition: 0.3s ease-in-out;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  font-size: 16px;
  font-weight: 400;
  margin: 50px 0 30px 0;
`;

const BlueButton = styled.button`
  width: 47%;
  height: 60px;
  background: #0a84ff;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  border-radius: 10px;
`;

const BlueBoderButton = styled.button`
  width: 47%;
  height: 60px;
  background: #ffffff;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #0a84ff;
  box-sizing: border-box;
  border: 2px solid #0a84ff;
  border-radius: 10px;
`;
export default CarConfirmPopup;
