import axios from "axios";
import Header from "components/common/Header";
import Main from "components/common/Main";
import Pagination from "components/common/Pagination";
import MyInfo from "components/Community/CommunityMyInfo";
import { useNavigate } from "react-router-dom";
import * as CommunityStyle from "style/CommunityStyle";
import { useState, useEffect, useRef } from "react";
import * as CommunityApi from "apis/CommunityApi";
import * as CommentApi from "apis/CommentApi";

type Community = {
  content?: string;
  createdAt?: string;
  hashtags?: string;
  title?: string;
  user_id?: string;
  _id?: string;
  updatedAt?: string;
  nickname?: string;
};

type Comment = {
  community_id: string;
  content: string;
  createdAt: string;
  nickname: string;
  updatedAt: string;
  user_id: string;
  _id: string;
};

function Community(props: any) {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(location.search.slice(-1)) || 1,
  );
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const [contentsPerPage, setcontentsPerPage] = useState<Community[] | []>([]);
  const [allCommunity, setAllCommunity] = useState<Community[] | []>([]);
  // const [searchedContent, setSearchedContent] = useState<Community[] | []>([]);
  const [commentCount, setCommentCount] = useState<Comment[] | []>([]);
  const [pageParams, setPageParams] = useState<any>(
    location.search.slice(-1) || null,
  );

  console.log("Community location path", location.search.split("=")[1]);

  const getData = (currentPage: number) => {
    if (location.search.split("=")[1]) {
      currentPage = Number(location.search.split("=")[1]);
    }

    setCurrentPage(currentPage);
  };
  /*
    currentPage 가 변화하지 않음
    pageParams 도 변화하지 않음
    location.search.slice(-1)는 변하고
  */

  useEffect(() => {
    const pageLocation = location.search.split("=")[1];

    setPageParams(pageLocation);

    if (location.search.split("=")[1]) {
      setCurrentPage(Number(location.search.split("=")[1]));
    }

    console.log("currentPage", currentPage);
    const api = async () => {
      try {
        const result = await CommunityApi.getCommunityPerPage(currentPage);
        setcontentsPerPage(result.findContent);

        // console.log("result.findContent", result);
      } catch (err) {
        console.log("err=>", err);
      }

      try {
        const result = await CommunityApi.getAllCommunity();

        setAllCommunity(result);
      } catch (err) {
        console.log("err=>", err);
      }

      try {
        const result = await CommentApi.getAllComments();

        setCommentCount(result);

        // console.log("commentCount", result);
      } catch (err) {
        console.log(err);
      }
    };
    api();
  }, [currentPage, pageParams]);

  console.log("pageParams", pageParams);

  const moveToEachContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name: id } = e.target as HTMLButtonElement;
    navigate(`/community/${id}?page=${currentPage}`, {
      state: {
        id,
        page: currentPage,
      },
    });
  };

  // console.log("allCommunity", allCommunity);

  const searchContents = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = searchRef?.current?.value;

    if (searchValue === "") {
      return;
    }

    const result = allCommunity.filter(item => {
      //글제목
      const title = item.title?.includes(searchValue!);

      //글내용
      const content = item.content?.includes(searchValue!);

      const nickname = item.nickname?.includes(searchValue!);

      //해시태그
      for (let i = 0; i < Number(item.hashtags?.length); i++) {
        if (item.hashtags) {
          const tags = item.hashtags[i];
          const hashtags = tags?.includes(searchValue!);

          if (hashtags) {
            return hashtags;
          }
        }
      }

      if (title) {
        return title;
      }
      if (content) {
        return content;
      }
      if (nickname) {
        return nickname;
      }
    });

    ///---- 검색결과 10 단위로 나눠서 뿌려주는 작업 (미루기)----
    // const resultArray = [];

    // for (let i = 0; i < result.length; i += 10) {
    //   resultArray.push(result.slice(i, i + 10));
    // }

    // console.log("resultArray", resultArray);

    // result.skip(10 * (currentPage - 1))

    setcontentsPerPage(result);
  };

  const onCommentCount = (id: any) => {
    const result = commentCount.filter(item => {
      return item.community_id === id;
    });

    // console.log("result", result);

    if (result.length == 0) {
      return;
    }

    return result.length;
  };

  return (
    <>
      <Header />
      <Main width="1850px">
        <CommunityStyle.CommunityWrap>
          <CommunityStyle.SearchBar>
            <form id="search" onSubmit={searchContents}>
              <fieldset>
                <legend>검색</legend>
                <input type="text" ref={searchRef} />
                <button>검색</button>
              </fieldset>
            </form>
          </CommunityStyle.SearchBar>
          <CommunityStyle.CommunityContent>
            <MyInfo />
            <CommunityStyle.BoardWrap>
              <div className="table">
                <div className="thead">
                  <div className="tr">
                    <p>제목</p>
                    <p>작성자</p>
                    <p>작성일</p>
                  </div>
                </div>
                <div className="tbody">
                  {contentsPerPage.length === 0 ? (
                    <div className="tr">
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "50px",
                          color: "#aaa",
                        }}
                      >
                        게시글이 없습니다
                      </p>
                    </div>
                  ) : (
                    contentsPerPage.map((item, index) => {
                      return (
                        <div className="tr" key={index}>
                          <div className="td">
                            <button
                              type="button"
                              name={item._id}
                              onClick={e => {
                                moveToEachContent(e);
                              }}
                            >
                              {item.title}
                            </button>
                            <p style={{ padding: "10px 0" }}>
                              {onCommentCount(item._id)! >= 0 ? (
                                <span className="commentWrap">
                                  <i className="ri-message-3-fill"></i>
                                  <span>{onCommentCount(item._id)}</span>
                                </span>
                              ) : null}
                            </p>
                          </div>
                          <div className="td nickname">
                            <p>{item.nickname}</p>
                          </div>
                          <div className="td">
                            {item.createdAt?.substring(0, 10)}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
              <Pagination
                currentPage={currentPage}
                getData={getData}
                pageParams={pageParams}
              />
            </CommunityStyle.BoardWrap>
          </CommunityStyle.CommunityContent>
        </CommunityStyle.CommunityWrap>
      </Main>
    </>
  );
}

export default Community;
