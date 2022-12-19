import styled from "styled-components";
import BlueCarIcon from "assets/img/BlueCarIcon.png";
import CalcEfficiencyForm from "assets/img/calcefficiencyform.png";

function UserCarRecommendDesc() {
  return (
    <WholeWrapper>
      <ContentWrapper>
        <IconWrapper>
          <img src={BlueCarIcon} />
        </IconWrapper>
        <ParagraphTitleWrapper>
          이미지 분석을 통한 전기차 추천
        </ParagraphTitleWrapper>
        <ParagraphWrapper>
          현재 자동차 이미지를 분석하여 해당 브랜드와 모델의 차량을 <br />
          참고해 전기차를 추천해 드려요.
        </ParagraphWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <CaptureImage src={CalcEfficiencyForm} />
      </ImageWrapper>
    </WholeWrapper>
  );
}

export default UserCarRecommendDesc;

const WholeWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  display: block;
  margin-top: 100px;
  @media screen and (max-width: 720px) {
    margin-top: 0px;
    margin-right: 0px;
  }
`;

const ContentWrapper = styled.div`
  display: block;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  margin-top: 150px;
  margin-left: 100px;
  @media screen and (max-width: 720px) {
    margin-top: 30px;
    margin-left: 0px;
  }
`;

const CaptureImage = styled.img`
  width: 300px;
  @media screen and (max-width: 720px) {
    width: 70%;
    margin-left: 0;
  }
`;

const ParagraphTitleWrapper = styled.div`
  text-align: left;
  margin-top: 25px;
  margin-left: 50px;
  font-size: 25px;
  line-height: 2.5rem;
  font-weight: bold;
  @media screen and (max-width: 720px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ParagraphWrapper = styled.div`
  text-align: left;
  margin-top: 1rem;
  margin-left: 50px;
  font-size: 16px;
  line-height: 1.7rem;
  @media screen and (max-width: 720px) {
    width: 100%;
    margin-top: 30px;
    margin-left: 0;
  }
`;
