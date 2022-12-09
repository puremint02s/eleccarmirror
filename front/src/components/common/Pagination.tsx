import React from "react";
import styled from "styled-components";

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const PageUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100px;

  li {
    cursor: pointer;
    width: 50px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.1s linear;

    &:hover {
      color: #aaa;
    }
  }
`;

const Pagination = () => {
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <PaginationWrap>
      <nav>
        <PageUl>
          {pageNumbers.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </PageUl>
      </nav>
    </PaginationWrap>
  );
};

export default Pagination;
