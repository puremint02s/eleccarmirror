import axios from "axios";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import * as CommunityApi from "apis/CommunityApi";
import e from "express";

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const PageUl = styled.div`
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

  ul {
    display: flex;
    justify-content: space-between;
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
  }
`;

const Pagination = ({ currentPage, getData }: any) => {
  const [totalPage, setTotalPage] = useState<number[] | []>([]);
  const [paginations, setPaginations] = useState([1, 2, 3, 4, 5]);
  // const [currentPageNum , setCurrentPageNum] = useState("");
  const [prevButtonState, setPrevButtonState] = useState(true);
  const [nextButtonState, setNextButtonState] = useState(true);
  const paginationRef = useRef<HTMLLIElement[]>([]);

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

  // console.log("pagination", pagination);

  useEffect(() => {
    const api = async () => {
      try {
        const result = await CommunityApi.getCommunityPerPage(1);

        const pages = Array.from(
          { length: Number(result.totalPage) },
          (v, i) => i + 1,
        );
        setTotalPage(pages);

        // console.log("pages", pages);
      } catch (err) {
        console.log(err);
      }

      console.log("currentPage", currentPage);
    };

    api();

    //현재 page number 에 따른 pagination 색상 변경
    if (!paginationRef.current) {
      return;
    }

    for (let i = 0; i < paginations.length; i++) {
      paginationRef.current[i].style.color = "#000";
      if (paginationRef.current[i].innerText == currentPage) {
        paginationRef.current[i].style.color = "#0a84ff";
      }
    }

    if (paginations.includes(1)) {
      setPrevButtonState(false);
    } else {
      setPrevButtonState(true);
    }

    if (paginations.length < 5) {
      setNextButtonState(false);
    } else {
      setNextButtonState(true);
    }
  }, [currentPage]);

  const loadPage = (e: React.MouseEvent<HTMLLIElement>) => {
    const currentPageNum = e.currentTarget.innerText;

    getData(currentPageNum);
  };

  const onPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!paginationRef.current) {
      return;
    }

    paginationRef.current[0].style.color = "#0a84ff";
    for (let i = pagination.length; i >= 0; i--) {
      if (pagination.indexOf(1) === null) {
        setPaginations(pagination[0]);
      }
      const page = pagination[i];

      setPaginations(page);
      // console.log("page1", pagination[0][0]);
      getData(pagination[0][0]);
    }
  };

  const onNext = () => {
    if (!paginationRef.current) {
      return;
    }
    paginationRef.current[0].style.color = "#0a84ff";
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
          {prevButtonState === false ? null : (
            <button name="prev" onClick={onPrev}>
              <i className="ri-arrow-left-s-line"></i>
            </button>
          )}

          <ul>
            {paginations.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={loadPage}
                  ref={(el: HTMLLIElement) => {
                    paginationRef.current[index] = el;
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          {nextButtonState === false ? null : (
            <button name="next" onClick={onNext}>
              <i className="ri-arrow-right-s-line"></i>
            </button>
          )}
        </PageUl>
      </nav>
    </PaginationWrap>
  );
};

export default Pagination;
