import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { R } from "App";
import styled from "styled-components";

interface propsTypes {
  userName: string;
}

const UserWelcome = ({ userName }: propsTypes) => {
  const navigate = useNavigate();
  const handleAddRefuelRecord = () => navigate(R.MYPAGE);
  return (
    <UserWelcomeWrapper>
      <UserWelcomeText>
        <span>안녕하세요 :)</span>
        <br />
        <span>{userName}</span>님!
      </UserWelcomeText>
      <RefuelText>최근에 주유 하셨나요?</RefuelText>
      <RefuelButton onClick={handleAddRefuelRecord}>
        주유 기록 하러 가기
      </RefuelButton>
    </UserWelcomeWrapper>
  );
};

const UserWelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
`;
const UserWelcomeText = styled.div`
  font-weight: 600;
  font-size: 2.2em;
  span: nth-child(3) {
    margin: 10px 0;
    color: #0a84ff;
  }
  @media screen and (max-height: 719px) {
    font-size: 1.8em;
  }
`;
const RefuelText = styled.div`
  font-size: 1.2em;
  color: #898989;
  margin: 40px 0 20px 0;
  font-weight: 600;
`;
const RefuelButton = styled.button`
  font-size: 0.9em;
  color: white;
  background-color: #898989;
  border: none;
  border-radius: 50px;
  padding: 8px 15px;
  width: 160px;
  font-weight: 600;
  cursor: pointer;
`;

export default UserWelcome;
