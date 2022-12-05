import styled from "styled-components";

function ServiceIntro2() {
  return (
    <Section2Background>
      <ContentBoxWrapper>
        <ContentBox>
          <ContentTitle>
            연비 측정 <br /> ——{" "}
          </ContentTitle>
          <ContentParagraph>
            지금까지의 주유 내역으로 <br />
            연비를 측정하여 그에 맞는 전비의 <br />
            전기차를 추천해드립니다.
          </ContentParagraph>
        </ContentBox>
        <ContentBox>
          <ContentTitle>
            이미지를 통한 추천 <br /> ——{" "}
          </ContentTitle>
          <ContentParagraph>
            지금까지의 주유 내역으로 <br />
            연비를 측정하여 그에 맞는 전비의 <br />
            전기차를 추천해드립니다.
          </ContentParagraph>
        </ContentBox>
        <ContentBox>
          <ContentTitle>
            전기차 성향 테스트 <br /> ——{" "}
          </ContentTitle>
          <ContentParagraph>
            지금까지의 주유 내역으로 <br />
            연비를 측정하여 그에 맞는 전비의 <br />
            전기차를 추천해드립니다.
          </ContentParagraph>
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

const ContentTitle = styled.p`
  margin-top: 15vh;
  font-size: 20px;
  line-height: 4vh;
`;

const ContentParagraph = styled.p`
  margin-top: 2vh;
  font-size: 12px;
  line-height: 3vh;
`;
