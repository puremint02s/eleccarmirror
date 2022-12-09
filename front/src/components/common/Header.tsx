import styled from "styled-components";
import LogoImg from "assets/img/MyElecCar logo.png";
import SessionStorage from "apis/SessionStorage";
import { Link } from "react-router-dom";

const HeaderTag = styled.header`
  width: 100%;
  height: 80px;
  /* background-color: pink; */

  div {
    height: 100%;
    /* padding: 0 50px; */
    max-width: 1850px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const H1 = styled.h1`
  width: 250px;
  height: 100%;
  /* background-color: #cbcbcb; */
  display: flex;
  align-items: center;

  a {
    display: block;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

const Nav = styled.nav`
  width: 20%;
  min-width: 500px;
  display: flex;
  justify-content: flex-end;
  padding-top: 3rem;
  padding-right: 5rem;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }
`;

const Logo = styled.img.attrs({ src: LogoImg })`
  width: 100px;
  padding-top: 3rem;
  padding-left: 5rem;
`;

const LogoutWrapper = styled(Link)``;

function Header() {
  function clickLogout() {
    SessionStorage.clearAllItem();
  }
  console.log(SessionStorage.getTokenItem());

  return (
    <>
      <HeaderTag>
        <div>
          <H1>
            <a href="/main">
              <Logo />
            </a>
          </H1>
          <Nav>
            <ul>
              <a href="/serviceintro">
                <li>서비스 소개</li>
              </a>
              {/* <a
                style={{ textDecoration: "none", color: "black" }}
                href="/mypage"
              >
                <li>마이페이지</li>
              </a> */}
              {SessionStorage.getTokenItem() ? (
                <>
                  <Link to="/mypage">
                    <li>마이페이지</li>
                  </Link>
                  <LogoutWrapper onClick={clickLogout} to="/">
                    <li>로그아웃</li>
                  </LogoutWrapper>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <li>로그인</li>
                  </Link>
                </>
              )}
            </ul>
          </Nav>
        </div>
      </HeaderTag>
    </>
  );
}

export default Header;
