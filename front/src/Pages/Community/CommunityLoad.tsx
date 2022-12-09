import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "components/common/Header";
import Main from "components/common/Main";
import MyInfo from "components/Community/CommunityMyInfo";
import * as C from "style/CommunityLoadStyle";

type contentProps = {
  title: string;
  content: string;
  createdAt: string;
  hashtags: [];
  nickname: string;
  _id: string;
  user_id: string;
};

type userProps = {
  nickname: string;
  user_id: string;
};

type commentProps = {
  content: string;
  nickname: string;
};

function CommunityLoad() {
  const location = useLocation();
  const navigate = useNavigate();
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [contents, setContents] = useState<contentProps | null>(null);
  const [user, setUser] = useState<userProps>();
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<commentProps[] | []>([]);

  const id = location.state.id;

  const baseUrl = "http://localhost:4005";
  const BearerString =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjhiODVjMzEtOTMzNy00ODU1LWFlZjctZmQzZTMzMWM5YzVjIiwiaWF0IjoxNjcwNTU1NjQ1fQ.g5z1XHSMydzzfP8sXuS27IRolC-dez13OqoUiZdz7pc";

  useEffect(() => {
    try {
      axios({
        method: "get",
        headers: {
          Authorization: `Bearer ${BearerString}`,
        },
        url: `${baseUrl}/community/${id}`,
      }).then(res => {
        setContents(res.data);
        // console.log("커뮤니티가 가진 유저 아이디", res.data.user_id);
      });
    } catch (err) {
      console.log("err=>", err);
    }

    try {
      axios({
        method: "get",
        headers: {
          Authorization: `Bearer ${BearerString}`,
        },
        url: `${baseUrl}/user/current`,
      }).then(res => {
        // console.log("현재 유저의 유저 아이디", res.data.user_id);
        setUser(res.data);
      });
    } catch (err) {
      console.log("err=>", err);
    }

    try {
      axios({
        method: "get",
        headers: {
          Authorization: `Bearer ${BearerString}`,
        },
        url: `${baseUrl}/community/comment/${id}`,
      }).then(res => {
        // console.log("해당 커뮤니티 댓글들???", res.data);
        setCommentList(res.data);
      });
    } catch (err) {
      console.log("err=>", err);
    }
  }, [comment]);

  const uploadComment = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios({
      method: "post",
      data: {
        content: commentRef?.current?.value,
        community_id: contents?._id,
      },
      headers: {
        Authorization: `Bearer ${BearerString}`,
      },
      url: `${baseUrl}/comment`,
    }).then(res => {
      // console.log("댓글??", res.data);
      setComment(res.data);
    });
  };

  const removeContent = () => {
    axios({
      method: "delete",
      data: contents?._id,
      headers: {
        Authorization: `Bearer ${BearerString}`,
      },
      url: `${baseUrl}/community`,
    }).then(res => {
      console.log("삭제?", res.status);
    });

    navigate(`/community`);
  };

  return (
    <>
      <Header />
      <Main width="1850px">
        <C.CommunityLoadWrap>
          <MyInfo />
          <C.CommunityContent>
            <C.Title>
              <div>
                <h2>{contents?.title}</h2>
                {contents?.createdAt?.substring(0, 10)}
              </div>
              <div>
                <p>{contents?.nickname}</p>
                {contents?.user_id === user?.user_id ? (
                  <p>
                    <button type="button">수정</button>
                    <button type="button" onClick={removeContent}>
                      삭제
                    </button>
                  </p>
                ) : null}
              </div>
            </C.Title>
            <C.Content>{contents?.content}</C.Content>
            <C.Hashtags>
              {contents?.hashtags.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </C.Hashtags>
            <C.Reply>
              {commentList.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item.nickname}</p>
                    <p>{item.content}</p>
                  </div>
                );
              })}
              <C.ReplyMySection>
                <p>{user?.nickname}</p>
                <form onSubmit={uploadComment}>
                  <textarea
                    placeholder="댓글을 입력해주세요"
                    ref={commentRef}
                  ></textarea>
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
