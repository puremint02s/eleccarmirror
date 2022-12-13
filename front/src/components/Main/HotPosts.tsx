import { useEffect, useState } from "react";
import styled from "styled-components";
import * as CommunityApi from "apis/CommunityApi";
import * as CommentApi from "apis/CommentApi";
import { useNavigate } from "react-router";

const HotPostsWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    font-size: 1.2em;
    font-weight: 600;
    padding: 20px 0;
  }
  & > a {
    span {
      font-size: 1.2em;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #e8e8e8;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

  .loading {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  & > div {
    width: 100%;
    padding: 15px 0;
    box-sizing: border-box;
    color: #898989;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    justify-content: space-between;

    & > div {
      width: 80%;
      display: flex;
      justify-content: flex-start;

      & > button {
        font-size: 16px;
        background-color: transparent;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          color: #0a84ff;
        }
      }

      & > p {
        padding: 10px 0 10px 10px;
        & > span {
          display: flex;
          width: 29px;
          justify-content: space-between;
          align-items: center;
          color: #888888;
          i {
            margin-top: 3px;
            color: #868e96;
          }
        }
      }
    }

    & > span {
      min-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

type CommunityProps = {
  title: string;
  content: string;
  nickname: string;
  _id: string;
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

const HotPosts = () => {
  const navigate = useNavigate();
  const [communitys, setCommunitys] = useState<CommunityProps[]>([]);
  const [commentCount, setCommentCount] = useState<Comment[] | []>([]);

  useEffect(() => {
    const api = async () => {
      try {
        const arr = [];

        //모든 커뮤니티 글
        const community = await CommunityApi.getAllCommunity();

        for (let i = 0; i < community.length; i++) {
          //커뮤니티의 댓글들
          const communityComments = await CommentApi.getCommunityComments(
            community[i]._id,
          );

          if (communityComments.length > 1 === true) {
            if (communityComments[0].community_id === community[i]._id) {
              arr.push(community[i]);
            }
          }
        }

        console.log("arr", arr);
        setCommunitys(arr.slice(0, 10));
      } catch (err) {
        console.log(err);
      }

      try {
        const result = await CommentApi.getAllComments();

        setCommentCount(result);

        console.log("commentCount", result);
      } catch (err) {
        console.log(err);
      }
    };

    api();
  }, []);

  console.log("communitys", communitys);

  const moveToEachContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name: id } = e.target as HTMLButtonElement;
    navigate(`/community/${id}`, {
      state: {
        id,
      },
    });
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
      <HotPostsWrap>
        <Title>
          <span>HOT! 게시물</span>
          <a href="/community">
            <span>더보기</span>
          </a>
        </Title>
        <Content>
          {communitys.length === 0 ? (
            <div className="loading">추천 게시글이 없습니다</div>
          ) : (
            communitys.map((item, index) => (
              <div key={index}>
                <div>
                  <button
                    type="button"
                    name={item._id}
                    onClick={e => {
                      moveToEachContent(e);
                    }}
                  >
                    {item.title}
                  </button>
                  <p>
                    {onCommentCount(item._id)! >= 0 ? (
                      <span className="commentWrap">
                        <i className="ri-message-3-fill"></i>
                        <span>{onCommentCount(item._id)}</span>
                      </span>
                    ) : null}
                  </p>
                </div>
                <span>{item.nickname}</span>
              </div>
            ))
          )}
        </Content>
      </HotPostsWrap>
    </>
  );
};

export default HotPosts;
