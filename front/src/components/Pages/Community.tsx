import React from "react";
//⛔issue
//👉절대 경로 설정 했는데, @ 로 접근하는게 안됩니다
import Header from "../common/Header";
import Main from "../common/Main";
import styled from "styled-components";

//⛔issue
//👉style 파일 따로 나누고 싶은데 ts 파일 import 가 안되고 있습니다

const CommunityWrap = styled.div`
  padding-top: 130px;
  width: 100%;
  height: auto;
`;

const CommunityContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const MyInfo = styled.div`
  width: 300px;
  height: auto;
  border-top: 2px solid #303030;

  .myInfo-user {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;

    & > p {
      width: 50%;

      .username {
        color: #0a84ff;
      }
    }

    & > span {
      display: inline-block;
      background-color: #eaeaea;
      border-radius: 20px;
      padding: 5px 10px;
      font-size: 14px;
    }
  }

  .myInfo-info {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #e0e0e0;
    ul {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-around;
      li {
        width: 30%;
        & + li {
          border-left: 1px solid #eaeaea;
        }

        span {
          display: block;
          text-align: center;
          font-size: 8px;
        }

        p {
          text-align: center;
          font-size: 14px;
          padding-top: 10px;
        }
      }
    }
  }

  .myInfo-write {
    width: 100%;
    height: auto;
    padding-bottom: 20px;
    border-bottom: 5px solid #eaeaea;
    .myInfo-write__count {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        display: flex;
        justify-content: center;
        p {
          padding-left: 10px;
        }
      }
    }

    button {
      width: 100%;
      padding: 15px 0;
      font-size: 18px;
      background-color: #0a84ff;
      border: none;
      color: #fff;
      cursor: pointer;

      /* &:hover {
        background-color: hover 색상 정하기 ;
      } */
    }
  }
`;

const BoardWrap = styled.div`
  width: calc(100% - 280px);
  margin-left: 20px;
  border-top: 2px solid #303030;
  border-bottom: 5px solid #eaeaea;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      height: 45px;
      border-bottom: 5px solid #eaeaea;
      tr {
        th {
          &:first-child {
            width: 80%;
          }
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #e8e8e8;
        height: 48px;
        td {
          text-align: center;

          &:first-child {
            text-align: left;
          }
        }
      }
    }
  }
`;

function Community() {
  return (
    <>
      <Header />
      <Main>
        <CommunityWrap>
          <div>검색바 들어갈 예정</div>
          <CommunityContent>
            <MyInfo>
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
                <button type="button">글쓰기</button>
              </div>
            </MyInfo>
            <BoardWrap>
              <table>
                <thead>
                  <tr>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EV6 V5 아이오닉 6 비교</td>
                    <td>전기차 박사</td>
                    <td>2022-04-12</td>
                  </tr>
                  <tr>
                    <td>EV6 V5 아이오닉 6 비교</td>
                    <td>전기차 박사</td>
                    <td>2022-04-12</td>
                  </tr>
                  <tr>
                    <td>EV6 V5 아이오닉 6 비교</td>
                    <td>전기차 박사</td>
                    <td>2022-04-12</td>
                  </tr>
                  <tr>
                    <td>EV6 V5 아이오닉 6 비교</td>
                    <td>전기차 박사</td>
                    <td>2022-04-12</td>
                  </tr>
                  <tr>
                    <td>EV6 V5 아이오닉 6 비교</td>
                    <td>전기차 박사</td>
                    <td>2022-04-12</td>
                  </tr>
                  <tr>
                    <td>EV6 V5 아이오닉 6 비교</td>
                    <td>전기차 박사</td>
                    <td>2022-04-12</td>
                  </tr>
                  <tr>
                    <td>EV6 V5 아이오닉 6 비교</td>
                    <td>전기차 박사</td>
                    <td>2022-04-12</td>
                  </tr>
                  <tr>
                    <td>EV6 V5 아이오닉 6 비교</td>
                    <td>전기차 박사</td>
                    <td>2022-04-12</td>
                  </tr>
                </tbody>
              </table>
            </BoardWrap>
          </CommunityContent>
        </CommunityWrap>
      </Main>
    </>
  );
}

export default Community;
