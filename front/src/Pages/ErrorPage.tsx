import { Link } from "react-router-dom";
import styled from "styled-components";
import GreyCarImg from "assets/img/GreyQuestionCar.png";

function ErrorPage() {
  return (
    <>
      <ErrorWrapper>
        <ErrorImageWrapper src={GreyCarImg} />
        <ErrorMessage>잘못된 주소예요... 😢</ErrorMessage>
        <Link to="/main">
          <GotoMainBtn>메인으로 돌아가기</GotoMainBtn>
        </Link>
      </ErrorWrapper>
    </>
  );
}

export default ErrorPage;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

const ErrorImageWrapper = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const ErrorMessage = styled.p`
  margin-top: 3rem;
  font-size: 20px;
`;

const GotoMainBtn = styled.button`
  width: 12rem;
  height: 3rem;
  margin: 2rem;
  font-size: 16px;
  background-color: #0a84ff;
  color: white;
  cursor: pointer;
`;
