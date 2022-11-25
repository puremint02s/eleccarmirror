import React from "react";
import styled from "styled-components";
// import { Logo } from "@/styles/index.ts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
    }

    li{
      list-style: none;
    }

`;

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
`;

const Nav = styled.nav`
  width: 20%;
  min-width: 500px;
  display: flex;
  justify-content: flex-end;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

function Header() {
  return (
    <>
      <GlobalStyle />
      <HeaderTag>
        <div>
          <H1>
            <a href="/">
              <img alt="my elec car" />
            </a>
          </H1>
          <Nav>
            <ul>
              <li>서비스 소개</li>
              <li>마이페이지</li>
              <li>로그아웃</li>
            </ul>
          </Nav>
        </div>
      </HeaderTag>
    </>
  );
}

export default Header;
