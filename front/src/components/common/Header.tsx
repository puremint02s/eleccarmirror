import styled from "styled-components/macro";
import LogoImg from "assets/img/MyElecCar logo.png";
import menu from "assets/img/menu.png";
import Storage from "apis/SessionStorage";
import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const onMenuToggle = () => {
    setMenuOpen(c => !c);
  };
  function clickLogout() {
    Storage.clearAllItem();
  }
  return (
    <HeaderWrapper isMenuOpen={isMenuOpen}>
      <LogoWrapper>
        <a href="/main">
          <Logo />
        </a>
        <HamburgerMenu src={menu} onClick={onMenuToggle}></HamburgerMenu>
      </LogoWrapper>

      {Storage.getTokenItem() ? (
        <NavWrapper isMenuOpen={isMenuOpen}>
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
        <NavWrapper isMenuOpen={isMenuOpen}>
          <li>
            <Link to="/serviceintro">서비스 소개</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </NavWrapper>
      )}
    </HeaderWrapper>
  );
}
const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 720px) {
    width: 100vw;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;
const HamburgerMenu = styled.img`
  width: 30px;
  height: 30px;
  @media screen and (min-width: 721px) {
    display: none;
  }
`;

const HeaderWrapper = styled.header<{ isMenuOpen: boolean }>`
  width: 100vw;
  height: auto;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: start;
    height: ${props => (props.isMenuOpen ? "200px" : "55px")};
  }
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.13);
  transition: 0.3s ease-in-out all;
  transition-delay: ${props => (props.isMenuOpen ? "0" : "0.3s")};
`;

const NavWrapper = styled.nav<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    font-weight: 600;
    font-size: 1.1em;
    margin-left: 30px;
    transition: 0.3s linear;
    transition-delay: ${props => (props.isMenuOpen ? "0.3s" : "0")};
    @media screen and (max-width: 720px) {
      opacity: ${props => (props.isMenuOpen ? "1" : "0")};
      padding: 13px 0;
      margin-left: 0px;
    }
  }
  li: hover {
    font-size: 1.15em;
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const Logo = styled.img.attrs({ src: LogoImg })`
  width: 200px;
`;

export default Header;
