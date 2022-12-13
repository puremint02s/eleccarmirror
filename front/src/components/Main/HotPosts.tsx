import { useState } from "react";
import styled from "styled-components/macro";

interface propsTypes {
  dummyPosts: Array<{
    title: string;
    userName: string;
  }>;
}

const HotPosts = ({ dummyPosts }: propsTypes) => {
  return (
    <HotPostsWrapper>
      <HotPostsTitle>
        <span>TOP! 10</span>
        <a href="/community">
          <span>더보기</span>
        </a>
      </HotPostsTitle>
      <HotPostsMain>
        {dummyPosts.map((v, i) => (
          <div key={i}>
            <span>{v.title}</span>
            <span>{v.userName}</span>
          </div>
        ))}
      </HotPostsMain>
    </HotPostsWrapper>
  );
};

export default HotPosts;

const HotPostsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const HotPostsTitle = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 1.2em;
    font-weight: 600;
  }
`;
const HotPostsMain = styled.div`
  display: flex;
  overflow: scroll;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  height: calc(100% - 50px);
  // height: auto;

  padding: 10px;
  box-sizing: border-box;
  div {
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
    color: #898989;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 720px) {
    height: auto;
  }
`;
