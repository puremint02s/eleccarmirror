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
            <ReportText>
              <span>추천 차량</span>
            </ReportText>
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
  @media screen and (max-width: 720px) {
    padding: 10px;
    padding-bottom: 30px;
  }
`;
const ReportHeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ReportHeaderText = styled.span`
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.9);

  padding: 0 16px;
  font-size: 1.2em;
  font-weight: 600;
`;
const ReportMainArea = styled.div`
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  // border: 1px solid #e8e8e8;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.08);
  height: calc(100% - 50px);
  overflow: hidden;
  padding: 0 10px;
  box-sizing: border-box;
  color: #898989;
  @media screen and (max-width: 720px) {
    padding-bottom: 0px;
  }
  @media screen and (max-height: 719px) {
    height: 300px;
  }
`;
const ReportTopSection = styled.section`
  width: 100%;
  height: 40%;
  border-bottom: 1.5px solid #e8e8e8;
  @media screen and (max-height: 719px) {
    height: 30%;
  }
`;
const ReportText = styled.div`
  color: "darkgrey";
  padding: 6px 10px;
  height: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: 600;
  border-bottom: 1.5px solid #e8e8e8;
  @media screen and (max-width: 720px) {
    padding: 15px;
  }
  @media screen and (max-height: 719px) {
    height: 20px;
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
    @media screen and (max-height: 719px) {
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
  align-items: center;
  height: calc(100% - 30px);
  @media screen and (max-width: 720px) {
    height: auto;
    flex-direction: column;
  }
  @media screen and (max-height: 719px) {
    height: 90%;
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
  width: 80%;
  height: 100%;
  div {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    span {
      padding: 0 8px;
    }
  }
  @media screen and (max-height: 719px) {
    width: 95%;
  }
`;

export default ElecCarReport;
