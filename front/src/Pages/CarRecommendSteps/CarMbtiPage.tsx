import Header from "components/common/Header";
import {
  TitleWrapper,
  SubTitleWrapper,
  TestStartButtonWrapper,
  TestStartButton,
} from "../../style/CarMbtiStyle";
import QuestionCarImg from "assets/img/QuestionCar.png";

function CarMbti() {
  return (
    <div>
      <Header />
      <TitleWrapper>전기차 성향 테스트</TitleWrapper>
      <SubTitleWrapper>
        성향을 파악하여 전기차 추천을 해드리겠습니다.
      </SubTitleWrapper>
      <TestStartButtonWrapper>
        <a href="/test">
          <TestStartButton>
            <img src={QuestionCarImg} style={{ width: 200 }} /> <br />
            <br /> 테스트 시작하기
          </TestStartButton>
        </a>
      </TestStartButtonWrapper>
    </div>
  );
}

export default CarMbti;
