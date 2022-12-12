import { useState } from "react";
import styled from "styled-components";
import Header from "components/common/Header";
import Sidebar from "components/MyPage/Sidebar";
import MyInfo from "components/MyPage/MyInfo";
import ModifyInfo from "components/MyPage/ModifyInfo";

export const enum TapValue {
  MYINFO = "MyInfo",
  MODIFYINFO = "ModifyInfo",
}

function MyPage() {
  const [value, setValue] = useState<TapValue>(TapValue.MYINFO);

  const TapSwitcher = () => {
    switch (value) {
      case TapValue.MYINFO:
        return <MyInfo />;
      case TapValue.MODIFYINFO:
        return <ModifyInfo />;
    }
  };

  return (
    <>
      <Header />
      <TitleWrapper>마이 페이지</TitleWrapper>
      <Sidebar value={value} setValue={setValue} />
      <MyPageWrapper>{TapSwitcher()}</MyPageWrapper>
    </>
  );
}

export default MyPage;

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
  font-weight: 500;
`;

const MyPageWrapper = styled.div`
  display: center;
  padding-bottom: 5rem;
`;
