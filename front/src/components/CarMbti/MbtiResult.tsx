import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "components/common/Header";
import { CAR, RESULT_CAR } from "./Contents/result";
import SocialShare from "hooks/SocialShareHook";
import {
  TitleWrapper,
  MbtiTitleWrapper,
  ResultImageWrapper,
  TestRetryButton,
  NextTestButton,
  ResultButtonWrapper,
  ResultMbtiWrapper,
  ResultListWrapper,
  ResultListComponentWrapper,
} from "../../style/CarMbtiStyle";
import BlueCarImg from "assets/img/BlueCar.png";

function Result() {
  const navigate = useNavigate();
  const [carName, setCarName] = useState<string>("");

  const { car } = useParams<{
    car: string;
  }>();

  useEffect(() => {
    const carName = Object.values(CAR).find(value => value === car);
    if (!carName) return navigate("/404");
    setCarName(carName);
  }, [car, navigate]);

  const handleClickRetry = () => navigate("/test");
  const handleClickCalcEfficiency = () => navigate("/calcefficency");

  if (!carName) return <></>;
  return (
    <>
      <Header />
      <ResultMbtiWrapper>
        <TitleWrapper>당신의 유형은...</TitleWrapper>
        <ResultImageWrapper>
          <img src={BlueCarImg} style={{ width: 200 }} />
        </ResultImageWrapper>
        <MbtiTitleWrapper>{RESULT_CAR[carName].name}</MbtiTitleWrapper>
        <div>
          <ResultListWrapper>
            {RESULT_CAR[carName].desc
              .split("/")
              .filter(item => item !== "/")
              .map((item, idx) => (
                <ResultListComponentWrapper key={item + idx}>
                  {item}
                </ResultListComponentWrapper>
              ))}
          </ResultListWrapper>
        </div>
        <ResultButtonWrapper>
          <SocialShare />
        </ResultButtonWrapper>
        <ResultButtonWrapper>
          <TestRetryButton onClick={handleClickRetry}>
            테스트 다시 하기
          </TestRetryButton>
          <NextTestButton onClick={handleClickCalcEfficiency}>
            연비 계산하기
          </NextTestButton>
        </ResultButtonWrapper>
      </ResultMbtiWrapper>
    </>
  );
}

export default Result;
