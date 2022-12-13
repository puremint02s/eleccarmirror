import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "components/common/Header";
import Main from "components/common/Main";
import MyInfo from "components/Community/CommunityMyInfo";
import * as C from "style/CommunityLoadStyle";
import * as CommunityApi from "apis/CommunityApi";
import * as CommentApi from "apis/CommentApi";

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
  _id: string;
  user_id: string;
};

function CommunityLoad() {
  const location = useLocation();
  const navigate = useNavigate();
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const commentEditRef = useRef<HTMLInputElement>(null);
  const [contents, setContents] = useState<contentProps | null>(null);
  const [user, setUser] = useState<userProps>();
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<commentProps[] | []>([]);
  const [isCommentRemoved, setIsCommentRemoved] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [resetTextArea, setResetTextArea] = useState("");

  const id = location.state.id;

  const baseUrl = "http://localhost:4005";
  const BearerString =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODE3NGUxZWEtYjY4YS00MDllLWJjNmUtNzc2M2U2OWYxNTIwIiwiaWF0IjoxNjcwNjg2MTQzfQ.76gaeWUa74s0QaTfCnGVcRzRAi7nh4WYtBFVoam_xcQ";

  useEffect(() => {
    const api = async () => {
      try {
        const data = await CommunityApi.getEachCommunity(id);
        setContents(data);
      } catch (err) {
        console.log("err=>", err);
      }

      try {
        const data = await CommentApi.getCommunityComments(id);
        setCommentList(data);
      } catch (err) {
        console.log("err=>", err);
      }
    };

    api();

    //유저 API - 추후 수정
    try {
      axios({
        method: "get",
        headers: {
          Authorization: `Bearer ${BearerString}`,
        },
        url: `${baseUrl}/user/current`,
      }).then(res => {
        setUser(res.data);
      });
    } catch (err) {
      console.log("err=>", err);
    }
  }, [comment, isCommentRemoved, isEditSelected]);

  const uploadComment = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = {
        content: commentRef?.current?.value,
        community_id: contents?._id,
      };

      const result = await CommentApi.postComment(data);

      setComment(result);
      setResetTextArea("");

      // if (!commentRef.current) {
      //   return;
      // }
    } catch (err) {
      console.log(err);
    }
  };

  const removeContent = async () => {
    const isRemove = confirm("삭제하시겠습니까?");

    if (isRemove) {
      try {
        const data = { _id: contents?._id };
        await CommunityApi.deleteEachCommunity(data);

        navigate(`/community`);
      } catch (err) {
        console.log(err);
      }
    }

    return;
  };

  const removeComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const isRemove = confirm("삭제하시겠습니까?");

    const commentId = e.currentTarget.name;

    if (isRemove) {
      try {
        const data = { _id: commentId };
        await CommentApi.deleteComment(data);
        setIsCommentRemoved(true);
      } catch (err) {
        console.log(err);
      }
    }

    return;
  };

  const isEditComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditSelected(true);

    const value = e.currentTarget.name;
    setCommentContent(value);
  };

  const editComment = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = {
        _id: e.currentTarget.name,
        content: commentContent,
      };

      await CommentApi.editComment(data);
      setIsEditSelected(false);
    } catch (err) {
      console.log(err);
    }
  };

  const changeCommentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.currentTarget.value);
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
                    <div>
                      {item.nickname}
                      {item?.user_id === user?.user_id && !isEditSelected ? (
                        <p>
                          <button
                            type="button"
                            name={item?.content}
                            onClick={e => {
                              isEditComment(e);
                            }}
                          >
                            수정
                          </button>
                          <button
                            type="button"
                            name={item?._id}
                            onClick={e => {
                              removeComment(e);
                            }}
                          >
                            삭제
                          </button>
                        </p>
                      ) : null}
                    </div>
                    {item?.user_id === user?.user_id && isEditSelected ? (
                      <form onSubmit={editComment} name={item?._id}>
                        <input
                          type="text"
                          value={commentContent}
                          onChange={e => {
                            changeCommentValue(e);
                          }}
                          ref={commentEditRef}
                        />
                        <button>수정완료</button>
                      </form>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                );
              })}
              <C.ReplyMySection>
                <p>{user?.nickname}</p>
                <form onSubmit={uploadComment}>
                  <textarea
                    placeholder="댓글을 입력해주세요"
                    value={resetTextArea}
                    onChange={e => {
                      setResetTextArea(e.target.value);
                    }}
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
