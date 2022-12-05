import { useState } from "react";
import styled from "styled-components";
import ReportIcon from "assets/img/report.png";
import CarIcon from "assets/img/car.png";
import DiagramIcon from "assets/img/diagram.png";

function ServiceIntro2() {
  const [firstDescription, setFirstDescription] = useState(false);
  const [secondDescription, setSecondDescription] = useState(false);
  const [thirdDescription, setThirdDescription] = useState(false);

  function Modal(props: any): any {
    function closeModal(): void {
      props.closeModal();
    }
    return (
      <ModalOutside onClick={closeModal}>
        <ModalBody onClick={e => e.stopPropagation()}>
          <ModalCloseBtn onClick={closeModal}>✖</ModalCloseBtn>
          {props.children}
        </ModalBody>
      </ModalOutside>
    );
  }

  return (
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
          <ModalOpenBtn onClick={() => setFirstDescription(!firstDescription)}>
            +
          </ModalOpenBtn>
          {firstDescription && (
            <Modal closeModal={() => setFirstDescription(!firstDescription)}>
              테스트테스트테스트
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
            <Modal closeModal={() => setSecondDescription(!secondDescription)}>
              테스트테스트테스트222
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
          <ModalOpenBtn onClick={() => setThirdDescription(!thirdDescription)}>
            +
          </ModalOpenBtn>
          {thirdDescription && (
            <Modal closeModal={() => setThirdDescription(!thirdDescription)}>
              테스트테스트테스트333
            </Modal>
          )}
        </ContentBox>
      </ContentBoxWrapper>
    </Section2Background>
  );
}

export default ServiceIntro2;

const Section2Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.9);
`;

const ContentBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25vh;
`;

const ContentBox = styled.div`
  width: 19vw;
  height: 45vh;
  background-color: #0a84ff;
  margin: 5px;
  color: white;
  text-align: center;
  border-radius: 7px;
`;

const IconWrapper = styled.img`
  margin-top: 7vh;
  width: 4vw;
`;

const ContentTitle = styled.p`
  margin-top: 4vh;
  font-size: 20px;
  line-height: 4vh;
`;

const ContentParagraph = styled.p`
  margin-top: 2vh;
  font-size: 16px;
  line-height: 3vh;
`;

const ModalOutside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  position: absolute;
  width: 300px;
  height: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  color: black;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

const ModalOpenBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  padding-top: 1.5vh;
  font-size: 20px;
`;
