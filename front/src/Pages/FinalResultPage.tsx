import styled from "styled-components";

function FinalResultPage() {
  return (
    <>
      <TitleWrapper>나에게 맞는 전기차는?</TitleWrapper>
      <>
        <p>나의 성향으로 추천</p>
        <>mbti 결과 + 이미지</>
      </>
      <>
        <p>나의 현재 차량으로 추천</p>
        <>현재 차량 추천 결과 + 이미지</>
      </>
      <>
        <p>나의 운전 습관으로 추천</p>
        <>연비로 추천한 결과 + 이미지</>
      </>
    </>
  );
}

export default FinalResultPage;

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
`;
