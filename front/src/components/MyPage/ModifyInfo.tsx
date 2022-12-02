import Header from "components/common/Header";
import Sidebar from "components/MyPage/Sidebar";
import styled from "styled-components";

function ModifyInfo() {
  return (
    <>
      <Header />
      <TitleWrapper>마이 페이지</TitleWrapper>
      <MyPageWrapper>
        <Sidebar />
        <MyPageContentWrapper>
          <div style={{ paddingTop: 100 }}>
            <MyPageContentTitle>회원정보</MyPageContentTitle>
            <MyPageContent>회원정보 내용</MyPageContent>
          </div>
        </MyPageContentWrapper>
      </MyPageWrapper>
    </>
  );
}

export default ModifyInfo;

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
  font-weight: 500;
`;

const MyPageWrapper = styled.div`
  display: flex;
`;

const MyPageContentWrapper = styled.div`
  text-align: center;
  padding-left: 3rem;
  display: inline;
  flex-direction: column;
  justify-content: center;
`;

const MyPageContentTitle = styled.p`
  text-align: left;
  padding-bottom: 15px;
`;

const MyPageContent = styled.div`
  width: 50rem;
  height: auto;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 2px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  ul {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    li {
      width: 30%;
      & + li {
        border-left: 1px solid #eaeaea;
      }

      span {
        display: block;
        text-align: center;
        font-size: 13px;
        color: #ababab;
      }

      p {
        text-align: center;
        font-size: 14px;
        padding-top: 15px;
      }
    }
  }
`;
