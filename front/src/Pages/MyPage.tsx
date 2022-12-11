import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "components/common/Header";
import Sidebar from "components/MyPage/Sidebar";
import Pagination from "components/common/Pagination";
import swal from "sweetalert";
import Storage from "apis/SessionStorage";
import { GetUserRefuelRecord } from "apis/RefuelRecordApi";

const dummyMyCarData = {
  model: "아반떼",
  brand: "현대",
  MPG: 10,
};

function MyPage() {
  const [oilingDate, setOilingDate] = useState("");
  const [gasType, setGasType] = useState("");
  const [gasAmount, setGasAmount] = useState("");
  const [odometer, setOdometer] = useState("");

  useEffect(() => {
    async function getUserOilingRecord() {
      const res = await GetUserRefuelRecord(
        "28b85c31-9337-4855-aef7-fd3e331c9c5c", //임시로 현재 user_id 집어넣음, 상태관리로 main page에서 현재 로그인한 user_id 만들어놔야 할 것 같음
      );
      setOilingDate(res.data.oiling_date);
      setGasType(res.data.gas_type);
      setGasAmount(res.data.gas_amount);
      setOdometer(res.data.odometer);
    }
    getUserOilingRecord();
  }, []);

  const handleRefuelRecordDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      swal({
        title: "주유내역을 삭제하시겠습니까?",
        text: "한 번 삭제된 내역은 복구할 수 없습니다.",
        icon: "warning",
        buttons: ["취소", "삭제"],
        dangerMode: true,
      }).then(async willDelete => {
        if (willDelete) {
          swal("삭제 완료", "주유내역이 정상적으로 삭제되었습니다.", "success");
        } else {
          swal("삭제 취소", "사용자가 삭제를 취소하였습니다.", "info");
        }
      });
    } catch (err) {
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <>
      {Storage.getTokenItem() ? (
        <>
          <Header />
          <TitleWrapper>마이 페이지</TitleWrapper>
          <MyPageWrapper>
            <Sidebar />
            <MyPageContentWrapper>
              <div style={{ paddingTop: 100 }}>
                <MyPageContentTitle>
                  나의 차량 정보
                  <Link to="/mypage/modifyinfo">
                    <ModifyCarInfoButton>수정</ModifyCarInfoButton>
                  </Link>
                </MyPageContentTitle>
                <MyPageContent>
                  <ul>
                    <li>
                      <span>차종</span>
                      <p>{dummyMyCarData.model}</p>
                    </li>
                    <li>
                      <span>제조사</span>
                      <p>{dummyMyCarData.brand}</p>
                    </li>
                    <li>
                      <span>평균 연비</span>
                      <p>{dummyMyCarData.MPG}km/L</p>
                    </li>
                  </ul>
                </MyPageContent>
              </div>
              <div style={{ paddingTop: 100 }}>
                <MyPageContentTitle>
                  이전 주유 기록 (최근 3개월)
                  <Link to="/mypage/addrefuelrecord">
                    <AddRefuelButton>+ 주유내역</AddRefuelButton>
                  </Link>
                </MyPageContentTitle>
                <RefuelWrap>
                  <table>
                    <thead>
                      <tr>
                        <th>주유 날짜</th>
                        <th>유종</th>
                        <th>주유량(L)</th>
                        <th>누적 주행 거리(km)</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{oilingDate}</td>
                        <td>{gasType}</td>
                        <td>{gasAmount}L</td>
                        <td>{odometer}km</td>
                        <td>
                          <Link to="/mypage/modifyrefuelrecord">
                            <button>수정</button>
                          </Link>
                          <button onClick={handleRefuelRecordDelete}>
                            삭제
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Pagination />
                </RefuelWrap>
              </div>
            </MyPageContentWrapper>
          </MyPageWrapper>
        </>
      ) : (
        <p>404</p>
      )}
    </>
  );
}

export default MyPage;

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
  font-weight: 500;
`;

const MyPageWrapper = styled.div`
  display: flex;
  padding-bottom: 5rem;
`;

const MyPageContentWrapper = styled.div`
  text-align: center;
  padding-left: 3rem;
  display: inline;
  flex-direction: column;
  justify-content: center;
`;

const MyPageContentTitle = styled.p`
  text-align: left;
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: 500;
`;

const ModifyCarInfoButton = styled.button`
  float: right;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  border-radius: 28px;
  border: none;
  font-size: 12px;
  color: #636363;
`;

const MyPageContent = styled.div`
  width: 50rem;
  height: auto;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 2px solid #e0e0e0;
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
        font-size: 14px;
        color: #ababab;
      }

      p {
        text-align: center;
        font-size: 16px;
        padding-top: 10px;
        font-weight: 500;
      }
    }
  }
`;

const AddRefuelButton = styled.button`
  float: right;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  border-radius: 28px;
  border: none;
  font-size: 12px;
  color: #636363;
`;

const RefuelWrap = styled.div`
  width: 50rem;
  border-top: 2px solid #e0e0e0;

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 60px;

    thead {
      height: 45px;
      border-bottom: 1px solid #eaeaea;
      th {
        font-size: 14px;
        padding-top: 18px;
        font-weight: 600;
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #e8e8e8;
        height: 48px;
        td {
          text-align: center;
          font-size: 14px;
          padding-top: 14px;
          color: #696969;
          button {
            margin-right: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
