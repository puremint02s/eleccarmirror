import { useEffect, useState } from "react";
import styled from "styled-components";
import * as CommunityApi from "apis/CommunityApi";
import * as CommentApi from "apis/CommentApi";
import { useNavigate } from "react-router";
import blueCar from "assets/img/BlueCar.png";
import loading from "assets/img/loading2.gif";

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
      <HotPostsWrapper>
        <HotPostsTitle>
          <span>HOT! 게시물</span>
          <a href="/community">
            <span>더보기</span>
          </a>
        </HotPostsTitle>
        <HotPostsMain>
          {communitys.length === 0 ? (
            <LoadingWrapper>
              <img style={{ width: "100px", height: "auto" }} src={blueCar} />
              <img style={{ width: "80px", height: "auto" }} src={loading} />
            </LoadingWrapper>
          ) : (
            communitys.map((item, index) => (
              <PostWrapper key={index}>
                <div style={{ width: "auto" }}>
                  <PostTitle
                    type="button"
                    name={item._id}
                    onClick={e => {
                      moveToEachContent(e);
                    }}
                  >
                    {item.title}
                  </PostTitle>
                  <p>
                    {onCommentCount(item._id)! >= 0 ? (
                      <div className="commentWrap">
                        <i className="ri-message-3-fill"></i>
                        <span>{onCommentCount(item._id)}</span>
                      </div>
                    ) : null}
                  </p>
                </div>
                <p style={{ display: "flex", alignItems: "center" }}>
                  {item.nickname}
                </p>
              </PostWrapper>
            ))
          )}
        </HotPostsMain>
      </HotPostsWrapper>
    </>
  );
};

export default HotPosts;
const HotPostsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    padding: 10px;
    padding-bottom: 30px;
  }
`;

const HotPostsTitle = styled.div`
  padding: 0 16px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.9);
    font-size: 1.2em;
    font-weight: 600;
  }
`;
const HotPostsMain = styled.div`
  background-color: white;
  border-radius: 16px;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: calc(100% - 50px);
  // border: 1px solid #e8e8e8;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.08);

  padding: 10px;
  box-sizing: border-box;
  div {
    width: 100%;
    padding: 5px 5px;
    padding-right: 10px;
    box-sizing: border-box;
    color: #898989;
    display: flex;
    justify-content: space-between;
  }
  div: last-child {
    border: none;
  }
  @media screen and (max-width: 720px) {
    height: auto;
  }
  p {
    div {
      display: flex;
      align-items: center;
      height: 30px;
    }
  }
`;

const PostWrapper = styled.div`
  border-bottom: 2px solid #e8e8e8;
`;
const PostTitle = styled.button`
  font-size: 1.1em;
  padding: 2px 0.5em;
  margin-right: 0.5em;
  border-radius: 5px;
  &: hover {
    color: white;
    background-color: #0a84ff;
  }
  transition: 0.3s ease-in-out all;
`;
const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center !important;
  align-items: center;
`;
