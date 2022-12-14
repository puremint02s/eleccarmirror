import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "components/common/Header";
import Main from "components/common/Main";
import MyInfo from "components/Community/CommunityMyInfo";
import * as C from "style/CommunityLoadStyle";
import * as CommunityApi from "apis/CommunityApi";
import * as CommentApi from "apis/CommentApi";
import * as UserApi from "apis/UserApi";

type contentProps = {
  title: string;
  content: string;
  createdAt: string;
  hashtags: string[];
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

  const toEditTitleRef = useRef(null);
  const toEditContentRef = useRef(null);
  const toEditHashTagsRef = useRef(null);

  const [contents, setContents] = useState<contentProps | null>(null);
  const [user, setUser] = useState<userProps>();
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<commentProps[] | []>([]);
  const [isCommentRemoved, setIsCommentRemoved] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [resetTextArea, setResetTextArea] = useState("");
  const [isContentEdit, setIsContentEdit] = useState(false);
  // const [editedContentTitle, setEditedContentTitle] = useState("");
  const [titleContent, setTitleContent] = useState<any>();
  const [contentsContent, setContentsContent] = useState<any>();
  const [hashtagsContent, setHashtagsContent] = useState<any>();

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const api = async () => {
      try {
        const data = await CommunityApi.getEachCommunity(id);

        console.log("cccc", data);

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

      try {
        const res = await UserApi.currentUserGet();

        setUser(res.data);
      } catch (err) {
        console.log("err=>", err);
      }
    };

    api();
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

  //콘텐츠 수정
  const editContent = () => {
    setIsContentEdit(true);
    setTitleContent(contents?.title);
    setContentsContent(contents?.content);
    setHashtagsContent(contents?.hashtags);
  };

  console.log("commentList", commentList);

  const onUpdateContent = async () => {
    try {
      const _id = contents?._id;
      const data = {
        _id,
        title: titleContent,
        content: contentsContent,
        hashtags: hashtagsContent,
      };
      const result = await CommunityApi.updateCommunity(data);
      console.log(result);
      setIsContentEdit(false);
      navigate(`/community`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Main width="1850px">
        <C.CommunityLoadWrap>
          <MyInfo />
          <C.CommunityContent>
            <C.Title>
              {isContentEdit ? (
                <>
                  <p>제목</p>
                  <div>
                    <input
                      type="text"
                      placeholder="제목을 입력해주세요"
                      // ref={toEditTitleRef}
                      value={titleContent}
                      onChange={e => {
                        setTitleContent(e.target.value);
                      }}
                    />
                  </div>
                </>
              ) : (
                <div>
                  <h2>{contents?.title}</h2>
                  {contents?.createdAt?.substring(0, 10)}
                </div>
              )}
              <div>
                <p>{contents?.nickname}</p>
                {contents?.user_id === user?.user_id && !isContentEdit ? (
                  <p>
                    <button type="button" onClick={editContent}>
                      수정
                    </button>
                    <button type="button" onClick={removeContent}>
                      삭제
                    </button>
                  </p>
                ) : (
                  <p>
                    <button type="button" onClick={onUpdateContent}>
                      수정완료
                    </button>
                  </p>
                )}
              </div>
            </C.Title>
            <C.Content>
              {isContentEdit ? (
                <div className="contentArea">
                  <textarea
                    placeholder="내용을 입력해주세요"
                    value={contentsContent}
                    onChange={e => {
                      setContentsContent(e.target.value);
                    }}
                  ></textarea>
                </div>
              ) : (
                <p>{contents?.content}</p>
              )}
            </C.Content>
            <C.Hashtags>
              {isContentEdit ? (
                <>
                  <p>관련검색어</p>
                  <div className="contentArea">
                    <input
                      placeholder="내용을 입력해주세요"
                      value={hashtagsContent}
                      onChange={e => {
                        setHashtagsContent(e.target.value);
                      }}
                    ></input>
                    <span className="hashtags-tip">
                      콤마로 관련검색어를 나눠주세요
                    </span>
                  </div>
                </>
              ) : contents?.hashtags[0] === "" ? null : (
                contents?.hashtags.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })
              )}
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
