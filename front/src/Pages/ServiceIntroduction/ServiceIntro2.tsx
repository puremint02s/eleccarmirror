import { useState } from "react";
import styled from "styled-components";
import ReportIcon from "assets/img/report.png";
import CarIcon from "assets/img/car.png";
import DiagramIcon from "assets/img/diagram.png";
import Service2BGImg from "assets/img/Service2BG.png";
import Modal from "components/common/Modal";
import CalcEfficiencyRecommendDesc from "components/ServiceIntroduction/CalcEfficiencyRecommendDesc";
import UserCarRecommendDesc from "components/ServiceIntroduction/UserCarRecommendDesc";
import MbtiTestRecommendDesc from "components/ServiceIntroduction/MbtiTestRecommendDesc";

function ServiceIntro2() {
  const [firstDescription, setFirstDescription] = useState(false);
  const [secondDescription, setSecondDescription] = useState(false);
  const [thirdDescription, setThirdDescription] = useState(false);

  return (
    <>
      <Section2Background>
        <ContentBoxWrapper>
          <ContentBox>
            <IconWrapper src={ReportIcon} />
            <ContentTitle>
              연비 측정 <br /> ——{" "}
            </ContentTitle>
            <ContentParagraph>
              지금까지의 주유 내역으로 <br />
              연비를 측정하여 그에 맞는 전비의 <br />
              전기차를 추천해드립니다.
            </ContentParagraph>
            <ModalOpenBtn
              onClick={() => setFirstDescription(!firstDescription)}
            >
              +
            </ModalOpenBtn>
            {firstDescription && (
              <Modal closeModal={() => setFirstDescription(!firstDescription)}>
                <CalcEfficiencyRecommendDesc />
              </Modal>
            )}
          </ContentBox>
          <ContentBox>
            <IconWrapper src={CarIcon} />
            <ContentTitle>
              이미지를 통한 추천 <br /> ——{" "}
            </ContentTitle>
            <ContentParagraph>
              현재 자동차 이미지를 분석하여 <br />
              해당 브랜드와 모델의 차량을 참고하여 <br />
              전기차를 추천해드립니다.
            </ContentParagraph>
            <ModalOpenBtn
              onClick={() => setSecondDescription(!secondDescription)}
            >
              +
            </ModalOpenBtn>
            {secondDescription && (
              <Modal
                closeModal={() => setSecondDescription(!secondDescription)}
              >
                <UserCarRecommendDesc />
              </Modal>
            )}
          </ContentBox>
          <ContentBox>
            <IconWrapper src={DiagramIcon} />
            <ContentTitle>
              전기차 성향 테스트 <br /> ——{" "}
            </ContentTitle>
            <ContentParagraph>
              간단한 테스트를 통해 <br />
              나의 구매 성향을 알아보고 <br />
              알맞은 전기차를 추천해드립니다.
            </ContentParagraph>
            <ModalOpenBtn
              onClick={() => setThirdDescription(!thirdDescription)}
            >
              +
            </ModalOpenBtn>
            {thirdDescription && (
              <Modal closeModal={() => setThirdDescription(!thirdDescription)}>
                <MbtiTestRecommendDesc />
              </Modal>
            )}
          </ContentBox>
        </ContentBoxWrapper>
      </Section2Background>
    </>
  );
}

export default ServiceIntro2;

const Section2Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Service2BGImg});
  background-size: 100vw 100vh;
`;

const ContentBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: start;
    padding-left: 5vw;
    padding-top: 3vh;
  }
`;

const ContentBox = styled.div`
  width: 19vw;
  height: 45vh;
  background-color: #0a84ff;
  margin: 5px;
  color: white;
  text-align: center;
  border-radius: 7px;
  @media screen and (max-width: 720px) {
    width: 50vw;
    height: 30vh;
  }
`;

const IconWrapper = styled.img`
  margin-top: 7vh;
  width: 4vw;
  @media screen and (max-width: 720px) {
    margin-top: 2vh;
  }
`;

const ContentTitle = styled.p`
  margin-top: 4vh;
  font-size: 20px;
  line-height: 4vh;
  @media screen and (max-width: 720px) {
    font-size: 16px;
  }
`;

const ContentParagraph = styled.p`
  margin-top: 2vh;
  font-size: 16px;
  line-height: 3vh;
  @media screen and (max-width: 720px) {
    font-size: 12px;
    line-height: 1.2;
  }
`;

const ModalOpenBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  padding-top: 1.5vh;
  font-size: 20px;
`;
