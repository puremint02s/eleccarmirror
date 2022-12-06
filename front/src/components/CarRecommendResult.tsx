import { useNavigate } from "react-router";
import styled from "styled-components";
import BlueCarImg from "assets/img/BlueCar.png";
import SocialShare from "hooks/SocialShareHook";

interface CarData {
  brand: string;
  model: string;
  distance: number;
  battery: number;
  MPG: number;
  cost: number;
  homepage: string;
}

function CarRecommendResult({ ...props }: CarData) {
  const navigate = useNavigate();
  const handleClickBrandHomepage = () => window.open(props.homepage);
  const handleClickMain = () => navigate("/main"); // 메인 페이지로 수정하기

  return (
    <>
      <RecommendResultWrapper>
        <RecommendResultContentWrapper>
          <img style={{ width: 150 }} src={BlueCarImg} alt="추천 차량 이미지" />
          <div style={{ paddingTop: 30, paddingBottom: 30 }}>
            <RecommendResultContent>
              제조사: {props.brand}
            </RecommendResultContent>
            <RecommendResultContent>모델: {props.model}</RecommendResultContent>
            <RecommendResultContent>
              주행거리: {props.distance}km
            </RecommendResultContent>
            <RecommendResultContent>
              배터리용량: {props.battery}kWh
            </RecommendResultContent>
            <RecommendResultContent>
              전비: {props.MPG}km/kWh
            </RecommendResultContent>
            <RecommendResultContent>
              가격: {props.cost}만원
            </RecommendResultContent>
          </div>
          <GotoBrandHompageButton onClick={handleClickBrandHomepage}>
            공식 홈페이지 방문
          </GotoBrandHompageButton>
          <GotoMainButton onClick={handleClickMain}>
            메인으로 이동
          </GotoMainButton>
          <SocialShare />
        </RecommendResultContentWrapper>
      </RecommendResultWrapper>
    </>
  );
}

export default CarRecommendResult;

const RecommendResultWrapper = styled.div`
  flex-direction: column;
  text-align: center;
`;

const RecommendResultContentWrapper = styled.div`
  width: 280px;
  display: inline-block;
`;

const RecommendResultContent = styled.p`
  padding-top: 0.5rem;
  text-align: left;
`;

const GotoBrandHompageButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #898989;
  font-size: 14px;
  text-align: center;
  width: 130px;
  cursor: pointer;
  background-color: #f6f6f6;
  margin-top: 1rem;
  display: inline-block;
  margin-right: 1rem;
`;

const GotoMainButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  width: 130px;
  cursor: pointer;
  color: white;
  background-color: #0a84ff;
  margin-top: 1rem;
  display: inline-block;
`;
