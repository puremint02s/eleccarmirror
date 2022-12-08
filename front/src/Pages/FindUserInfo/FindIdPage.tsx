import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  LoginFormBox,
  LoginFormWrapper,
  LoginInputTitle,
  LoginInput,
} from "style/LoginFormStyle";

function FindIdPage() {
  return (
    <LoginFormBox>
      <LoginFormWrapper>
        <FindIdFormTitle>아이디 찾기</FindIdFormTitle>
        <LoginInputTitle>이름</LoginInputTitle>
        <LoginInput placeholder="가입하신 이름을 적어주세요." />
        <LoginInputTitle>이메일</LoginInputTitle>
        <LoginInput placeholder="가입하신 이메일을 적어주세요." />
        <FindIdBtnWrapper>
          <SubmitButton type="submit">확인</SubmitButton>
          <Link to="/find">
            <CancelButton>취소</CancelButton>
          </Link>
        </FindIdBtnWrapper>
      </LoginFormWrapper>
    </LoginFormBox>
  );
}

export default FindIdPage;

const FindIdFormTitle = styled.div`
  margin-top: 10rem;
  margin-bottom: 25px;
  text-align: center;
  font-size: 20px;
`;

const FindIdBtnWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.5rem;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  text-align: center;
  background-color: #0a84ff;
  color: white;
  border: 1px solid #0a84ff;
  width: 100%;
  display: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
  font-size: 15px;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  text-align: center;
  background-color: #f6f6f6;
  border: 1px solid #f6f6f6;
  width: 100%;
  display: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
  font-size: 15px;
  margin-top: 1rem;
`;