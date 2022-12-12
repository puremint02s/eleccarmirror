import axios from "axios";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import * as CommunityApi from "apis/CommunityApi";

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const PageUl = styled.ul`
  display: flex;
  justify-content: space-between;
  /* width: 150px; */

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;

    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      margin-left: 10px;
    }

    i {
      font-size: 18px;
    }
  }

  li {
    cursor: pointer;
    width: 30px;
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
  const [totalPage, setTotalPage] = useState<number[] | []>([]);
  const [paginations, setPaginations] = useState([1, 2, 3, 4, 5]);

  //참고 링크 : https://gurtn.tistory.com/174
  const division = (data: any, size: number) => {
    const arr = [];

    for (let i = 0; i < data.length; i += size) {
      //data.length : 총 pagination 숫자 수 => 6
      arr.push(data.slice(i, i + size));
      // console.log("arr", arr);
    }

    return arr;
  };

  const pagination = division(totalPage, 5);

  useEffect(() => {
    const api = async () => {
      try {
        const result = await CommunityApi.getCommunityPerPage(1);

        const pages = Array.from(
          { length: Number(result.totalPage) },
          (v, i) => i + 1,
        );
        setTotalPage(pages);
      } catch (err) {
        console.log(err);
      }
    };

    api();
  }, []);

  const loadPage = (e: React.MouseEvent<HTMLLIElement>) => {
    const currentPage = e.currentTarget.innerText;

    getData(currentPage);
  };

  const onPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    for (let i = pagination.length; i >= 0; i--) {
      if (pagination.indexOf(1) === null) {
        setPaginations(pagination[0]);
      }
      const page = pagination[i];

      setPaginations(page);
      console.log("page1", pagination[0][0]);
      getData(pagination[0][0]);
    }
  };

  const onNext = () => {
    for (let i = 0; i < pagination.length; i++) {
      const page = pagination[i];
      setPaginations(page);
      getData(page[0]);
    }
  };

  return (
    <PaginationWrap>
      <nav>
        <PageUl>
          <button name="prev" onClick={onPrev}>
            <i className="ri-arrow-left-s-line"></i>
          </button>
          {paginations.map((item, index) => {
            return (
              <li key={index} onClick={loadPage}>
                {item}
              </li>
            );
          })}
          <button name="next" onClick={onNext}>
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </PageUl>
      </nav>
    </PaginationWrap>
  );
};

export default Pagination;
