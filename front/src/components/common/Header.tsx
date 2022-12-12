import styled from "styled-components/macro";
import LogoImg from "assets/img/MyElecCar logo.png";
import Storage from "apis/SessionStorage";
import { Link } from "react-router-dom";

function Header() {
  function clickLogout() {
    Storage.clearAllItem();
  }
  return (
    <HeaderWarraper>
      <a href="/main">
        <Logo />
      </a>
      {Storage.getTokenItem() ? (
        <NavWrapper>
          <li>
            <Link to="/serviceintro">서비스 소개</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
          <li>
            <Link onClick={clickLogout} to="/">
              로그아웃
            </Link>
          </li>
        </NavWrapper>
      ) : (
        <NavWrapper>
          <li>
            <Link to="/serviceintro">서비스 소개</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </NavWrapper>
      )}
    </HeaderWarraper>
  );
}

const HeaderWarraper = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    font-size: 1.2em;
    margin-left: 30px;
    color: salmon;
    transition: 0.3s ease-in-out;
  }
  li: hover {
    font-size: 1.25em;
  }
`;

const Logo = styled.img.attrs({ src: LogoImg })`
  width: 200px;
`;

export default Header;
