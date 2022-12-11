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

function Community(props: any) {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);
  const [currentPage, setCurrentPage] = useState<string | null>("1");
  const [contentsPerPage, setcontentsPerPage] = useState<Community[] | []>([]);
  const [allCommunity, setAllCommunity] = useState<Community[] | []>([]);
  const [searchedContent, setSearchedContent] = useState<Community[] | []>([]);

  const getData = (currentPage: any) => {
    setCurrentPage(currentPage);
  };

  useEffect(() => {
    const api = async () => {
      try {
        const result = await CommunityApi.getCommunityPerPage(currentPage);
        setcontentsPerPage(result.findContent);
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
        // const result = await CommentApi.getCommunityComments();
      } catch (err) {
        console.log(err);
      }
    };
    api();
  }, [currentPage]);

  const moveToEachContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name: id } = e.target as HTMLButtonElement;
    navigate(`/community/${id}`, {
      state: {
        id,
      },
    });
  };

  const searchContents = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = searchRef?.current?.value;

    const result = allCommunity.filter(item => {
      //글제목
      const title = item.title?.includes(searchValue!);

      //글내용
      const content = item.content?.includes(searchValue!);

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
    });

    setcontentsPerPage(result);

    console.log("result", result);
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
              <table>
                <thead>
                  <tr>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                  </tr>
                </thead>
                <tbody>
                  {contentsPerPage.length === 0 ? (
                    <tr>
                      <td>글이 없습니다</td>
                    </tr>
                  ) : (
                    contentsPerPage.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <button
                              type="button"
                              name={item._id}
                              onClick={e => {
                                moveToEachContent(e);
                              }}
                            >
                              {item.title}
                            </button>
                            <span>
                              <i
                                className="ri-message-3-fill"
                                style={{ color: "#8f8f8f" }}
                              ></i>
                            </span>
                          </td>
                          <td>{item.nickname}</td>
                          <td>{item.createdAt?.substring(0, 10)}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
              <Pagination currentPage={currentPage} getData={getData} />
            </CommunityStyle.BoardWrap>
          </CommunityStyle.CommunityContent>
        </CommunityStyle.CommunityWrap>
      </Main>
    </>
  );
}

export default Community;
