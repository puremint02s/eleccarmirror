import { Link } from "react-router-dom";
import styled from "styled-components";
import WhiteLogoImg from "assets/img/MyElecCar white logo.png";
import Service1BGImg from "assets/img/Service1BG.png";

function ServiceIntro1() {
  return (
    <>
      <Section1Wrapper>
        <LeftBackground>
          <Link to="/main">
            <LogoWrapper src={WhiteLogoImg} alt="서비스 로고" />
          </Link>
          <LeftBackground2>
            <LeftBackground3>
              <Title1>나에게 맞는 전기차를 찾아볼까요?</Title1>
              <Subtitle>
                현재 나의 차, 성향, 주유기록을 통해 나에게 딱 맞는 전기차를
                찾아봐요.
              </Subtitle>
              <Link to="/signuplogin">
                <Section1Button>회원가입하고 찾으러 가기</Section1Button>
              </Link>
            </LeftBackground3>
          </LeftBackground2>
        </LeftBackground>
        <RightBackground />
      </Section1Wrapper>
    </>
  );
}

export default ServiceIntro1;

const Section1Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const RightBackground = styled.div`
  display: flex;
  /* width: 60vw; */
  width: 80vw;
  background-image: url(${Service1BGImg});
  /* background-size: 60vw 100vh; */
  background-size: 1300px 100vh;
  background-repeat: no-repeat;
  background-position: -20px 0;
`;

const LeftBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0a84ff;
`;

const LeftBackground2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 70%;
  background-color: #0a84ff;
    width: 80vw;
  }
`;

const LeftBackground3 = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title1 = styled.span`
  font-size: 30px;
  margin-bottom: 25px;
  color: white;
    width: 100%
  }
`;

const Subtitle = styled.span`
  font-size: 15px;
  color: white;
  margin-bottom: 80px;
`;

const Section1Button = styled.button`
  font-size: 15px;
  color: #0a84ff;
  width: 260px;
  height: 60px;
  background-color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  @media screen and (max-width: 720px) {
    width: 40vw;
  }
`;

const LogoWrapper = styled.img`
  width: 200px;
  margin-top: 5vh;
  margin-left: 10vw;
`;
