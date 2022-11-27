import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CAR, RESULT_CAR } from "./Contents/result";
import {
  TitleWrapper,
  MbtiTitleWrapper,
  TestRetryButton,
  NextTestButton,
  ResultButtonWrapper,
  ResultMbtiWrapper,
  ResultListWrapper,
} from "../../style/CarMbtiStyle";

function Result() {
  const navigate = useNavigate();
  const [carName, setCarName] = useState<string>("");

  const { car } = useParams<{
    car: string;
  }>();

  useEffect(() => {
    const carName = Object.values(CAR).find((value) => value === car);
    if (!carName) return navigate("/404");
    setCarName(carName);
  }, [car, navigate]);

  const handleClickRetry = () => navigate("/test");

  if (!carName) return <></>;
  return (
    <ResultMbtiWrapper>
      <TitleWrapper>당신의 유형은...</TitleWrapper>
      <MbtiTitleWrapper>{RESULT_CAR[carName].name}</MbtiTitleWrapper>
      <div>
        <ResultListWrapper>
          {RESULT_CAR[carName].desc
            .split("/")
            .filter((item) => item !== "/")
            .map((item, idx) => (
              <li key={item + idx}>{item}</li>
            ))}
        </ResultListWrapper>
      </div>
      <div>
        <p style={{ textAlign: "center", marginTop: 30 }}>친구에게 공유하기</p>
        <ResultButtonWrapper>
          <button>페이스북</button>
          <button>카카오톡</button>
          <button>트위터</button>
          <button>링크 복사</button>
        </ResultButtonWrapper>
      </div>
      <ResultButtonWrapper>
        <TestRetryButton onClick={handleClickRetry}>
          테스트 다시 하기
        </TestRetryButton>
        <NextTestButton>다음 테스트</NextTestButton>
      </ResultButtonWrapper>
    </ResultMbtiWrapper>
  );
}

export default Result;
