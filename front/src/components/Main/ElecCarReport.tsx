import styled from "styled-components/macro";
import tempImage from "assets/img/GreyQuestionCar.png";

interface CarProps {
  model: string;
  brand: string;
}
const ElecCarReport = ({ car }: { car: CarProps }) => {
  return (
    <>
      <ReportWrapper>
        <ReportHeaderWrapper>
          <ReportHeaderText>전기차 추천 리포트</ReportHeaderText>
          <a href="/carregister">
            <ReportHeaderText>추천 다시 받기</ReportHeaderText>
          </a>
        </ReportHeaderWrapper>
        <ReportMainArea>
          <ReportTopSection>
            <ReportText>현재 차량</ReportText>
            <ReportTopSub>
              <div>
                <span>유형</span>
                <span>{car.model}</span>
              </div>
              <div>
                <span>평균연비</span>
                <span>{car.model}</span>
              </div>
            </ReportTopSub>
            <ReportTopSub>
              <div>
                <span>차종</span>
                <span>{car.model}</span>
              </div>
              <div>
                <span>제조사</span>
                <span>{car.brand}</span>
              </div>
            </ReportTopSub>
          </ReportTopSection>
          <ReportBottomSection>
            <ReportText>추천 차량</ReportText>
            <ReportBottomSubSection>
              <CarInfoWrapper>
                <CarImage src={tempImage} />
              </CarInfoWrapper>
              <CarInfoWrapper>
                <CarInfoTextWrapper>
                  <div>
                    <span>제조사</span>
                    <span>ㅇㅇㅇ</span>
                  </div>
                  <div>
                    <span>모델</span>
                    <span>ㅇㅇㅇ</span>
                  </div>
                  <div>
                    <span>주행거리</span>
                    <span>ㅇㅇㅇ</span>
                  </div>
                  <div>
                    <span>배터리 용량</span>
                    <span>ㅇㅇㅇ</span>
                  </div>
                  <div>
                    <span>전비</span>
                    <span>ㅇㅇㅇ</span>
                  </div>
                  <div>
                    <span>가격</span>
                    <span>ㅇㅇㅇ</span>
                  </div>
                </CarInfoTextWrapper>
              </CarInfoWrapper>
            </ReportBottomSubSection>
          </ReportBottomSection>
        </ReportMainArea>
      </ReportWrapper>
    </>
  );
};
// cursor: "pointer",

const ReportWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const ReportHeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ReportHeaderText = styled.span`
  font-size: 1.2em;
  font-weight: 600;
`;
const ReportMainArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 1px solid #e8e8e8;
  height: calc(100% - 50px);
  overflow: hidden;
  padding: 0 10px;
  box-sizing: border-box;
  color: #898989;
`;
const ReportTopSection = styled.section`
  width: 100%;
  height: 40%;
  border-bottom: 1px solid #e8e8e8;
`;
const ReportText = styled.div`
  color: "darkgrey";
  padding: 10px 10px 0 10px;
  height: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: 600;
  border-bottom: 1px solid #e8e8e8;
  @media screen and (max-width: 720px) {
    padding: 15px;
  }
`;
const ReportTopSub = styled.div`
  height: calc(50% - 20px);
  display: flex;
  div {
    padding: 0 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    span: first-child {
      width: 30%;
    }
    @media screen and (max-width: 720px) {
      padding: 10px 10px;
      span: first-child {
        width: 50%;
      }
    }
  }
`;
const ReportBottomSection = styled.div`
  width: 100%;
  height: 60%;
`;
const ReportBottomSubSection = styled.section`
  display: flex;
  height: calc(100% - 30px);
  @media screen and (max-width: 720px) {
    height: auto;
    flex-direction: column;
  }
`;
const CarImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  @media screen and (max-width: 720px) {
    width: 70vw;
    height: auto;
    margin: 20px 0;
  }
`;
const CarInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 90%;
  @media screen and (max-width: 720px) {
    width: 100%;
    height: auto;
  }
`;
const CarInfoTextWrapper = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    span {
      padding: 0 8px;
    }
  }
`;

export default ElecCarReport;
