import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "components/common/Header";
import Main from "components/common/Main";
import MyInfo from "components/Community/CommunityMyInfo";
import * as C from "style/CommunityLoadStyle";

function CommunityLoad() {
  const location = useLocation();
  const [contents, setContents] = useState<{
    title: string;
    content: string;
    createdAt: string;
    hashtags: string;
  } | null>(null);

  const id = location.state.id;

  console.log("id ===>", id);

  useEffect(() => {
    const baseUrl = "http://localhost:4005";
    try {
      axios({
        method: "get",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGRjY2I5YjQtZDk1OC00ZGNlLThiYzUtZDc2OGViZWNhOTU5IiwiaWF0IjoxNjcwNDc1MjU2fQ.DA0qvxxafWybGMBUSHONTq-dYgXyd9-IcoJnRzTg8zE`,
        },
        url: `${baseUrl}/community/${id}`,
      }).then(res => {
        console.log(res.data);
        setContents(res.data);
      });
    } catch (err) {
      console.log("err=>", err);
    }
  }, []);

  return (
    <>
      <Header />
      <Main width="1850px">
        <C.CommunityLoadWrap>
          <MyInfo />
          <C.CommunityContent>
            <C.Title>
              <h2>{contents?.title}</h2>
              {contents?.createdAt?.substring(0, 10)}
            </C.Title>
            <C.Content>{contents?.content}</C.Content>
            <C.Hashtags>{contents?.hashtags}</C.Hashtags>
            <C.Reply>
              <div>
                <p>댓글 등록자</p>
                <p>댓글 내용</p>
                <p>댓글 입력 날짜</p>
              </div>
              <C.ReplyMySection>
                <p>내 아이디</p>
                <form>
                  <textarea placeholder="댓글을 입력해주세요"></textarea>
                  <div className="button">
                    <button>등록</button>
                  </div>
                </form>
              </C.ReplyMySection>
            </C.Reply>
          </C.CommunityContent>
        </C.CommunityLoadWrap>
      </Main>
    </>
  );
}

export default CommunityLoad;
