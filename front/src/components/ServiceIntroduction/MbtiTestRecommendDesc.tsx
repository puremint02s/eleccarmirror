import styled from "styled-components";
import DiagramIcon from "assets/img/diagram.png";
import CalcEfficiencyForm from "assets/img/calcefficiencyform.png";

function MbtiTestRecommendDesc() {
  return (
    <WholeWrapper>
      <ContentWrapper>
        <IconWrapper>
          <img src={DiagramIcon} />
        </IconWrapper>
        <ParagraphTitleWrapper>
          구매 성향 테스트를 통해 <br /> 전기차를 추천해드려요
        </ParagraphTitleWrapper>
        <ParagraphWrapper>
          현재 나의 차와 주유기록을 통해 평균 연비를 알아보고 <br />
          평균 연비를 바탕으로 비슷한 전비의 전기차를 추천해 드려요.
        </ParagraphWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <CaptureImage src={CalcEfficiencyForm} />
      </ImageWrapper>
    </WholeWrapper>
  );
}

export default MbtiTestRecommendDesc;

const WholeWrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  display: block;
  margin-top: 100px;
  margin-right: 270px;
`;

const ContentWrapper = styled.div`
  display: block;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  margin-top: 150px;
  margin-left: 100px;
`;

const CaptureImage = styled.img`
  width: 300px;
  border-radius: 15px;
`;

const ParagraphTitleWrapper = styled.div`
  text-align: left;
  margin-top: 25px;
  margin-left: 50px;
  font-size: 25px;
  line-height: 2.5rem;
  font-weight: bold;
`;

const ParagraphWrapper = styled.div`
  text-align: left;
  margin-top: 1rem;
  margin-left: 50px;
  font-size: 16px;
  line-height: 1.7rem;
`;
