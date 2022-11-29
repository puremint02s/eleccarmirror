import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { copyClipboard } from "components/common/CopyClipboard";
import { CAR, RESULT_CAR } from "./Contents/result";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
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
    const carName = Object.values(CAR).find(value => value === car);
    if (!carName) return navigate("/404");
    setCarName(carName);
  }, [car, navigate]);

  const handleClickRetry = () => navigate("/test");
  const handleClickCalcEfficiency = () => navigate("/calcefficency");
  const currentUrl = window.location.href;

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
            .filter(item => item !== "/")
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
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon size={48} round={true} borderRadius={24} />
          </FacebookShareButton>
          <ShareButton>K</ShareButton>
          <TwitterShareButton url={currentUrl}>
            <TwitterIcon size={48} round={true} borderRadius={24} />
          </TwitterShareButton>
          <ShareButton
            onClick={() =>
              copyClipboard(
                currentUrl,
                () => console.log("link copy success"),
                () => console.log("link copy fail"),
              )
            }
          >
            L
          </ShareButton>
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
