import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components/macro";
import * as UserApi from "apis/UserApi";
import * as CommunityApi from "apis/CommunityApi";
import * as CarMbtiTestApi from "apis/CarMbtiTestApi";
import * as CarApi from "apis/CarApi";
import CalcAverageEfficiency from "hooks/CalcAverageEfficiency";
import { UserStateContext } from "App";

const MyInfo = styled.div`
  width: 300px;
  height: auto;
  border-top: 2px solid #303030;

  @media screen and (max-width: 1370px) {
    width: 100%;
  }

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
    .usertype {
      display: flex;
      justify-content: space-between;
      /* width: 91px; */
      i {
        color: #6897c6;
        font-size: 20px;
      }
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
  }
`;

export const UploadButton = styled.button`
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  background-color: #0a84ff;
  border: none;
  color: #fff;
  cursor: pointer;
`;

function CommunityMyInfo() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ nickname: string; user_id: string }>();
  const [userCommunity, setUserCommunity] = useState();
  const [userTestType, setUserTestType] = useState<{ type: string }>();
  const [userCarInfo, setUserCarInfo] = useState<{
    model: string;
    brand: string;
  }>();

  const currentUser = useContext(UserStateContext);

  const currentUserCalcEfficiency = CalcAverageEfficiency(
    currentUser?.user?.user_id, //임시로 현재 user_id 집어넣음
  );

  const toUploadPage = () => {
    navigate(`/community/upload`);
  };

  useEffect(() => {
    const api = async () => {
      try {
        const res = await UserApi.currentUserGet();
        setUser(res.data);
        // console.log("res.data", res);
      } catch (err) {
        console.log(err);
      }

      try {
        const res = await CommunityApi.getUserCommunityList(`${user?.user_id}`);
        setUserCommunity(res.data.length);
      } catch (err) {
        console.log(err);
      }

      try {
        const data = {
          nickname: user?.nickname,
        };

        const res = await CommunityApi.updateUserAllCommunity(data);
      } catch (err) {
        console.log(err);
      }

      try {
        const res = await CarMbtiTestApi.carMbtiTypeGet({
          user_id: user?.user_id,
        });
        // setUserTestType(res.data[res.data.length - 1]);
        setUserTestType(res[res.length - 1]);

        // console.log("TTTYPE", res[res.length - 1].type);
      } catch (err) {
        console.log(err);
      }

      try {
        const res = await CarApi.CarInfoGet();
        setUserCarInfo(res.data.current);
      } catch (err) {
        console.log(err);
      }
    };
    api();
  }, [userCommunity]);

  console.log("userTestType?.type", userTestType?.type);

  return (
    <MyInfo>
      <div className="myInfo-user">
        <p>
          <span className="username">{user?.nickname}</span>님
        </p>
        <span>
          {userTestType?.type === undefined ? (
            <span className="usertype">
              <i className="ri-emotion-unhappy-fill"></i> 유형 없음
            </span>
          ) : (
            <span className="usertype">{userTestType?.type}유형</span>
          )}
        </span>
      </div>
      <div className="myInfo-info">
        <ul>
          <li>
            <span>차종</span>
            <p>{userCarInfo?.model === undefined ? "-" : userCarInfo?.model}</p>
          </li>
          <li>
            <span>제조사</span>
            <p>{userCarInfo?.brand === undefined ? "-" : userCarInfo?.brand}</p>
          </li>
          <li>
            <span>평균 연비</span>
            <p>{currentUserCalcEfficiency.averageEfficiency}km/L</p>
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
          <div className="count">{userCommunity}</div>
        </div>
        <UploadButton onClick={toUploadPage}>글쓰기</UploadButton>
      </div>
    </MyInfo>
  );
}

export default CommunityMyInfo;
