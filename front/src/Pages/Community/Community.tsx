import axios from "axios";
import Header from "components/common/Header";
import Main from "components/common/Main";
import Pagination from "components/common/Pagination";
import MyInfo from "components/Community/CommunityMyInfo";
import { useNavigate } from "react-router-dom";
import * as CommunityStyle from "style/CommunityStyle";
import { useState, useEffect } from "react";

type Community = {
  content?: string;
  createdAt?: string;
  hashtags?: string;
  title?: string;
  user_id?: string;
  _id?: string;
  updatedAt?: string;
};

function Community(props: any) {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<string | null>("1");
  const [contentsPerPage, setcontentsPerPage] = useState<Community[] | []>([]);

  const getData = (currentPage: any) => {
    setCurrentPage(currentPage);
  };

  const baseUrl = "http://localhost:4005";
  useEffect(() => {
    try {
      axios({
        method: "get",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGRjY2I5YjQtZDk1OC00ZGNlLThiYzUtZDc2OGViZWNhOTU5IiwiaWF0IjoxNjcwNDc1MjU2fQ.DA0qvxxafWybGMBUSHONTq-dYgXyd9-IcoJnRzTg8zE`,
        },
        url: `${baseUrl}/community?page=${currentPage}&perPage=10`,
      }).then(res => {
        console.log(res.data.findContent);
        setcontentsPerPage(res.data.findContent);
        console.log("contentsPerPage =>", contentsPerPage);
      });
    } catch (err) {
      console.log("err=>", err);
    }
  }, [currentPage]);

  const moveToEachContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name: id } = e.target as HTMLButtonElement;
    navigate(`/community/${id}`, {
      state: {
        id,
      },
    });
  };

  return (
    <>
      <Header />
      <Main width="1850px">
        <CommunityStyle.CommunityWrap>
          <CommunityStyle.SearchBar>
            <form id="search">
              <fieldset>
                <legend>검색</legend>
                <input type="text" />
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
                  {contentsPerPage.map((item, index) => {
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
                            {item.content}
                          </button>

                          {/* <span style={{ opacity: 0 }}>{item._id}</span> */}
                        </td>
                        <td>{item.title}</td>
                        <td>{item.createdAt?.substring(0, 10)}</td>
                      </tr>
                    );
                  })}
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
