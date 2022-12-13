import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "components/common/Pagination";
import swal from "sweetalert";
import { R } from "App";
import { getUserRefuelRecord, deleteRefuelRecord } from "apis/RefuelRecordApi";
import { getUserCarInfo } from "apis/CarInfoApi";
import Modal from "components/common/Modal";
import AddNewRefuelRecord from "./AddRefuelRecord";
import ModifyRecord from "./ModifyRefuelRecord";

const dummyMyCarData = {
  model: "아반떼",
  brand: "현대",
  MPG: 10,
};

function MyInfo() {
  const [currentCarModel, setCurrentCarModel] = useState("");
  const [currentCarBrand, setCurrentCarBrand] = useState("");

  const [recordId, setRecordId] = useState("");
  const [oilingDate, setOilingDate] = useState("");
  const [gasType, setGasType] = useState("");
  const [gasAmount, setGasAmount] = useState("");
  const [odometer, setOdometer] = useState("");
  const [records, setRecords] = useState([]);

  const [addingRefuelRecord, setAddingRefuelRecord] = useState(false);
  const [modifyingRefuelRecord, setModifyingRefuelRecord] = useState(false);

  useEffect(() => {
    async function setCurrentUserCarInfo() {
      const res = await getUserCarInfo();
      const carInformation = res.data.current;
      if (carInformation) {
        setCurrentCarModel(carInformation.model);
        setCurrentCarBrand(carInformation.brand);
      }
    }
    setCurrentUserCarInfo();
  }, []);

  useEffect(() => {
    async function getUserOilingRecord() {
      const res = await getUserRefuelRecord(
        "28b85c31-9337-4855-aef7-fd3e331c9c5c", //임시로 현재 user_id 집어넣음, 상태관리로 main page에서 현재 로그인한 user_id 만들어놔야 할 것 같음
      );
      setRecords(res);
      setRecordId(res[0]._id);
      setOilingDate(res[0].oiling_date);
      setGasType(res[0].gas_type);
      setGasAmount(res[0].gas_amount);
      setOdometer(res[0].odometer);
    }
    getUserOilingRecord();
  }, []);

  const handleRefuelRecordDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const CurrentRecordId = recordId;

    try {
      swal({
        title: "주유내역을 삭제하시겠습니까?",
        text: "한 번 삭제된 내역은 복구할 수 없습니다.",
        icon: "warning",
        buttons: ["취소", "삭제"],
        dangerMode: true,
      }).then(async willDelete => {
        if (willDelete) {
          const data = { _id: CurrentRecordId };
          await deleteRefuelRecord(data);
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
      <MyPageWrapper>
        <MyPageContentWrapper>
          <div style={{ paddingTop: 100 }}>
            <MyPageContentTitle>나의 차량 정보</MyPageContentTitle>
            <MyPageContent>
              {!currentCarModel ? (
                <>
                  <p>차량이 생기셨나요?</p>
                  <Link to={R.CARREGISTER}>
                    <button>차량 등록하러 가기</button>
                  </Link>
                </>
              ) : (
                <ul>
                  <li>
                    <span>차종</span>
                    <p>{currentCarModel}</p>
                  </li>
                  <li>
                    <span>제조사</span>
                    <p>{currentCarBrand}</p>
                  </li>
                  <li>
                    <span>평균 연비</span>
                    <p>{dummyMyCarData.MPG}km/L</p>
                  </li>
                </ul>
              )}
            </MyPageContent>
          </div>
          <div style={{ paddingTop: 100 }}>
            <MyPageContentTitle>
              이전 주유 기록 (최근 3개월)
              <AddRefuelButton
                onClick={() => setAddingRefuelRecord(!addingRefuelRecord)}
              >
                + 주유내역
              </AddRefuelButton>
              {addingRefuelRecord && (
                <Modal
                  closeModal={() => setAddingRefuelRecord(!addingRefuelRecord)}
                >
                  <AddNewRefuelRecord />
                </Modal>
              )}
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
                  {!recordId ? (
                    <tr>
                      <td>주유내역이 존재하지 않습니다.</td>
                    </tr>
                  ) : (
                    <tr>
                      <td>{oilingDate.substring(0, 10)}</td>
                      <td>{gasType}</td>
                      <td>{gasAmount}L</td>
                      <td>{odometer}km</td>
                      <td>
                        <button
                          onClick={() =>
                            setModifyingRefuelRecord(!modifyingRefuelRecord)
                          }
                        >
                          수정
                        </button>
                        {modifyingRefuelRecord && (
                          <Modal
                            closeModal={() =>
                              setModifyingRefuelRecord(!modifyingRefuelRecord)
                            }
                          >
                            <ModifyRecord _id={recordId} />
                          </Modal>
                        )}
                        <button onClick={handleRefuelRecordDelete}>삭제</button>
                      </td>
                    </tr>
                    // records.map((record, index) => {
                    //   return (
                    //     <tr key={index}>
                    //       <td>{record.oilingDate.substring(0, 10)}</td>
                    //       <td>{record.gasType}</td>
                    //       <td>{record.gasAmount}L</td>
                    //       <td>{record.odometer}km</td>
                    //       <td>
                    //         <button
                    //           onClick={() =>
                    //             setModifyingRefuelRecord(!modifyingRefuelRecord)
                    //           }
                    //         >
                    //           수정
                    //         </button>
                    //         {modifyingRefuelRecord && (
                    //           <Modal
                    //             closeModal={() =>
                    //               setModifyingRefuelRecord(
                    //                 !modifyingRefuelRecord,
                    //               )
                    //             }
                    //           >
                    //             <ModifyRecord _id={recordId} />
                    //           </Modal>
                    //         )}
                    //         <button onClick={handleRefuelRecordDelete}>
                    //           삭제
                    //         </button>
                    //       </td>
                    //     </tr>
                    //   );
                    // })
                  )}
                </tbody>
              </table>
            </RefuelWrap>
          </div>
        </MyPageContentWrapper>
      </MyPageWrapper>
    </>
  );
}

export default MyInfo;

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
