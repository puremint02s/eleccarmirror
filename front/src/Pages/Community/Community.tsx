import axios from "axios";
import Header from "../../components/common/Header";
import Main from "../../components/common/Main";
import Pagination from "components/common/Pagination";
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
  console.log("currentPage", currentPage);

  const toUploadPage = () => {
    navigate(`/community/upload`);
  };

  useEffect(() => {
    const baseUrl = "http://localhost:4005";
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
            <CommunityStyle.MyInfo>
              <div className="myInfo-user">
                <p>
                  <span className="username">홍길동</span>님
                </p>
                <span>
                  <span className="usertype">CFBH</span> 유형
                </span>
              </div>
              <div className="myInfo-info">
                <ul>
                  <li>
                    <span>차종</span>
                    <p>아반떼</p>
                  </li>
                  <li>
                    <span>제조사</span>
                    <p>현대</p>
                  </li>
                  <li>
                    <span>평균 연비</span>
                    <p>10km/L</p>
                  </li>
                </ul>
              </div>
              <div className="myInfo-write">
                <div className="myInfo-write__count">
                  <div className="title">
                    <span>
                      <i className="ri-article-line"></i>
                    </span>
                    <p>내가 쓴 글</p>
                  </div>
                  <div className="count">0</div>
                </div>
                <CommunityStyle.UploadButton onClick={toUploadPage}>
                  글쓰기
                </CommunityStyle.UploadButton>
              </div>
            </CommunityStyle.MyInfo>
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
                        <td>{item.title}</td>
                        <td>{item.content}</td>
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
