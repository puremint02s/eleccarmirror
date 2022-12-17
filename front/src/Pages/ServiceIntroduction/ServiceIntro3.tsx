import { Link } from "react-router-dom";
import styled from "styled-components";

function ServiceIntro3() {
  return (
    <Section3Background>
      <TitleWrapper>커뮤니티에서 전기차에 관한 정보를 둘러보세요!</TitleWrapper>
      <Section3Wrapper>
        <PostboxWrapper>
          <Postbox>
            <PostboxTitle>고속도로에서 방전됐을 때 꿀팁</PostboxTitle>
            <PostboxWriter>전기차 박사</PostboxWriter>
          </Postbox>
          <Postbox>
            <PostboxTitle>고속도로에서 방전됐을 때 꿀팁</PostboxTitle>
            <PostboxWriter>배터리 0퍼</PostboxWriter>
          </Postbox>
          <Postbox2>
            <PostboxTitle>고속도로에서 방전됐을 때 꿀팁</PostboxTitle>
            <PostboxWriter>피카츄 주인</PostboxWriter>
          </Postbox2>
          <Postbox3>
            <PostboxTitle>고속도로에서 방전됐을 때 꿀팁</PostboxTitle>
            <PostboxWriter>전기차 박사</PostboxWriter>
          </Postbox3>
        </PostboxWrapper>
        <Section3Paragraph>
          전기차 추천을 받은 후, <br />
          다른 사람들은 어떤 전기차를 추천 받았는지 <br />
          둘러보고 전기차에 관해 정보 나눔도 <br />
          가질 수 있는 커뮤니티가 있습니다. <br />
          <Link to="/main">
            <Section3Button>테스트 후 커뮤니티 둘러보기</Section3Button>
          </Link>
        </Section3Paragraph>
      </Section3Wrapper>
    </Section3Background>
  );
}

export default ServiceIntro3;

const Section3Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`;

const TitleWrapper = styled.p`
  font-size: 30px;
  padding-top: 20vh;
  padding-left: 10vw;
`;

const Section3Wrapper = styled.div`
  display: flex;
`;

const PostboxWrapper = styled.div`
  padding-top: 5vh;
  padding-left: 10vw;
`;

const Postbox = styled.div`
  width: 40vw;
  height: 10vh;
  background-color: white;
  margin-top: 3vh;
  position: relative;
`;

const Postbox2 = styled.div`
  width: 40vw;
  height: 10vh;
  background-color: white;
  margin-top: 3vh;
  position: relative;
  opacity: 0.5;
`;

const Postbox3 = styled.div`
  width: 40vw;
  height: 10vh;
  background-color: white;
  margin-top: 3vh;
  position: relative;
  opacity: 0.3;
`;

const PostboxTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
`;

const PostboxWriter = styled.p`
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-50%, -50%);
`;

const Section3Paragraph = styled.div`
  padding-top: 8vh;
  padding-left: 15vh;
  font-size: 16px;
  line-height: 4vh;
`;

const Section3Button = styled.button`
  margin-top: 5vh;
  width: 15vw;
  height: 8vh;
  font-size: 15px;
  color: white;
  background-color: #303030;
  border: none;
  cursor: pointer;
`;
