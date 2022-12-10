import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const PageUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 150px;

  li {
    cursor: pointer;
    width: 50px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.1s linear;
    font-size: 18px;

    &:hover {
      color: #aaa;
    }
  }
`;

const Pagination = ({ currentPage, getData }: any) => {
  const pageNumbers = [1, 2, 3, 4, 5];
  // const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [totalPage, setTotalPage] = useState<number[] | []>([]);

  // console.log("currentPage", currentPage);

  useEffect(() => {
    try {
      const baseUrl = "http://localhost:4005";
      axios({
        method: "get",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGRjY2I5YjQtZDk1OC00ZGNlLThiYzUtZDc2OGViZWNhOTU5IiwiaWF0IjoxNjcwNDc1MjU2fQ.DA0qvxxafWybGMBUSHONTq-dYgXyd9-IcoJnRzTg8zE`,
        },
        url: `${baseUrl}/community?page=1&perPage=10`,
      }).then(res => {
        console.log(res.data.totalPage);
        const pages = Array.from(
          { length: Number(res.data.totalPage) },
          (v, i) => i + 1,
        );
        setTotalPage(pages);

        console.log("pages", pages);
      });
    } catch (err) {
      console.log("err=>", err);
    }
  }, []);

  const loadPage = (e: React.MouseEvent<HTMLLIElement>) => {
    const currentPage = e.currentTarget.innerText;
    getData(currentPage);
  };

  return (
    <PaginationWrap>
      <nav>
        <PageUl>
          {totalPage.map((item, index) => {
            return (
              <li key={index} onClick={loadPage}>
                {item}
              </li>
            );
          })}
        </PageUl>
      </nav>
    </PaginationWrap>
  );
};

export default Pagination;
