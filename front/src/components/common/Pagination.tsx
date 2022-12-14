import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import * as CommunityApi from "apis/CommunityApi";

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
  const [totalPage, setTotalPage] = useState<any[]>([]);
  const [paginations, setPaginations] = useState<any[]>([]);
  const [prevButtonState, setPrevButtonState] = useState(false);
  const [nextButtonState, setNextButtonState] = useState(true);
  const [pageLength, setPageLength] = useState(0);
  const paginationRef = useRef<HTMLLIElement[]>([]);

  console.log("totalPage ==>", totalPage);

  useEffect(() => {
    const api = async () => {
      try {
        const result = await CommunityApi.getCommunityPerPage(1);

        const pages = Array.from(
          { length: Number(result.totalPage) },
          (v, i) => i + 1,
        );

        const arr = [];

        for (let i = 0; i < pages.length; i += 5) {
          //pages.length : 총 pagination 숫자 수 => 6
          arr.push(pages.slice(i, i + 5));
        }

        console.log("pages.length", pageLength);
        setPageLength(pages.length);

        setTotalPage(arr);
        setPaginations(arr[0]);
      } catch (err) {
        console.log(err);
      }

      console.log("paginations", paginations);
    };
    api();
  }, [pageLength]);

  useEffect(() => {
    //현재 page number 에 따른 pagination 색상 변경
    if (!paginationRef.current) {
      return;
    }

    if (!paginations) {
      return;
    }

    for (let i = 0; i < paginations.length; i++) {
      paginationRef.current[i].style.color = "#000";
      if (paginationRef.current[i].innerText == currentPage) {
        paginationRef.current[i].style.color = "#0a84ff";
      }
    }

    if (paginations.includes(1) || paginations.length === 0) {
      setPrevButtonState(false);
    } else {
      setPrevButtonState(true);
    }

    if (pageLength <= 5 || paginations.length < 5) {
      setNextButtonState(false);
    } else {
      setNextButtonState(true);
    }
  }, [currentPage, paginations, pageLength]);

  const loadPage = (e: React.MouseEvent<HTMLLIElement>) => {
    const currentPageNum = e.currentTarget.innerText;

    getData(currentPageNum);
  };

  const onPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!paginationRef.current) {
      return;
    }

    paginationRef.current[0].style.color = "#0a84ff";
    for (let i = totalPage.length; i >= 0; i--) {
      if (totalPage.indexOf(1) === null) {
        setPaginations(totalPage[0]);
      }
      const page = totalPage[i];

      setPaginations(page);
      getData(totalPage[0][0]);
    }
  };

  const onNext = () => {
    if (!paginationRef.current) {
      return;
    }
    paginationRef.current[0].style.color = "#0a84ff";
    for (let i = 0; i < totalPage.length; i++) {
      const page = totalPage[i];
      console.log("this", page);
      setPaginations(page);
      getData(page[0]);
    }
  };

  console.log("paginations2", paginations);

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
            {paginations === undefined
              ? null
              : paginations.map((item, index) => {
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
