import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CAR, RESULT_CAR } from "./Contents/result";
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
  ShareButtonWrapper,
  ShareButtonTitle,
  ShareButton,
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
  const handleClickCalcEfficiency = () => navigate("/calcefficency");

  if (!carName) return <></>;
  return (
    <ResultMbtiWrapper>
      <TitleWrapper>당신의 유형은...</TitleWrapper>
      <ResultImageWrapper>테스트 결과 이미지 자리</ResultImageWrapper>
      <MbtiTitleWrapper>{RESULT_CAR[carName].name}</MbtiTitleWrapper>
      <div>
        <ResultListWrapper>
          {RESULT_CAR[carName].desc
            .split("/")
            .filter((item) => item !== "/")
            .map((item, idx) => (
              <ResultListComponentWrapper key={item + idx}>
                {item}
              </ResultListComponentWrapper>
            ))}
        </ResultListWrapper>
      </div>
      <ShareButtonWrapper>
        <ShareButtonTitle>친구에게 공유하기</ShareButtonTitle>
        <ResultButtonWrapper>
          <ShareButton>F</ShareButton> {/* 페이스북 공유 버튼 */}
          <ShareButton>K</ShareButton> {/* 카카오톡 공유 버튼 */}
          <ShareButton>T</ShareButton> {/* 트위터 공유 버튼 */}
          <ShareButton>L</ShareButton> {/* 링크복사 버튼 */}
        </ResultButtonWrapper>
      </ShareButtonWrapper>
      <ResultButtonWrapper>
        <TestRetryButton onClick={handleClickRetry}>
          테스트 다시 하기
        </TestRetryButton>
        <NextTestButton onClick={handleClickCalcEfficiency}>
          다음 테스트
        </NextTestButton>
      </ResultButtonWrapper>
    </ResultMbtiWrapper>
  );
}

export default Result;
