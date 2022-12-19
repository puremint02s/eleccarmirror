import { useState, useEffect, useContext } from "react";
import { UserStateContext } from "App";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { R } from "App";
import { getUserRefuelRecord } from "apis/RefuelRecordApi";
import { getCarInfo } from "apis/CarRegisterApi";
import Modal from "components/common/Modal";
import ConfirmModal from "components/common/ConfirmModal";
import AddNewRefuelRecord from "./AddRefuelRecord";
import ModifyRecord from "./ModifyRefuelRecord";
import CalcAverageEfficiency from "hooks/CalcAverageEfficiency";
import DeleteRecord from "./DeleteRefuelRecord";

function MyInfo() {
  const [currentCarModel, setCurrentCarModel] = useState("");
  const [currentCarBrand, setCurrentCarBrand] = useState("");
  const [recommendedCarModel, setRecommendedCarModel] = useState("");
  const [recommendedCarBrand, setRecommendedCarBrand] = useState("");
  const [records, setRecords] = useState([]);

  const [addingRefuelRecord, setAddingRefuelRecord] = useState(false);
  const [modifyingRefuelRecord, setModifyingRefuelRecord] = useState(false);
  const [deletingRefuelRecord, setDeletingRefuelRecord] = useState(false);

  const currentUser = useContext(UserStateContext);

  const currentUserCalcEfficiency = CalcAverageEfficiency(
    currentUser?.user?.user_id,
  );

  useEffect(() => {
    async function setCurrentUserCarInfo() {
      const res = await getCarInfo();
      const currentCarInformation = res.data.current;
      if (currentCarInformation) {
        setCurrentCarModel(currentCarInformation.model);
        setCurrentCarBrand(currentCarInformation.brand);
      }
      const recommendedCarInformation = res.data.recommended;
      if (recommendedCarInformation) {
        setRecommendedCarModel(recommendedCarInformation.model);
        setRecommendedCarBrand(recommendedCarInformation.brand);
      }
    }
    setCurrentUserCarInfo();
  }, []);

  useEffect(() => {
    async function getUserOilingRecord() {
      const res = await getUserRefuelRecord(currentUser?.user?.user_id);
      setRecords(res);
    }
    getUserOilingRecord();
  }, []);

  return (
    <>
      <MyPageWrapper>
        <MyPageContentWrapper>
          <div style={{ paddingTop: 100 }}>
            {currentCarModel ? (
              <>
                <Link to={R.CARREGISTER}>
                  <ReregisterCarBtn>차량 재등록하러 가기</ReregisterCarBtn>
                </Link>
              </>
            ) : (
              <></>
            )}
            <MyPageContentTitle>나의 차량 정보</MyPageContentTitle>
            <MyPageContent>
              {!currentCarModel ? (
                <>
                  <NewRegisterCarDesc>차량이 생기셨나요?</NewRegisterCarDesc>
                  <Link to={R.CARREGISTER}>
                    <NewRegisterCarBtn>차량 등록하러 가기</NewRegisterCarBtn>
                  </Link>
                </>
              ) : (
                <ul>
                  <li>
                    <span>제조사</span>
                    <p>{currentCarBrand}</p>
                  </li>
                  <li>
                    <span>차종</span>
                    <p>{currentCarModel}</p>
                  </li>
                  <li>
                    <span>평균 연비</span>
                    <p>{currentUserCalcEfficiency.averageEfficiency}km/L</p>
                  </li>
                </ul>
              )}
            </MyPageContent>
            {!recommendedCarModel ? (
              <>
                <NewRegisterCarDesc>
                  등록된 추천 차량이 없습니다.
                </NewRegisterCarDesc>
                <Link to={R.CARREGISTER}>
                  <NewRegisterCarBtn>차량 추천받으러 가기</NewRegisterCarBtn>
                </Link>
              </>
            ) : (
              <>
                <MyPageContentTitle>나의 추천 차량 정보</MyPageContentTitle>
                <MyPageContent>
                  <ul>
                    <li>
                      <span>제조사</span>
                      <p>{recommendedCarBrand}</p>
                    </li>
                    <li>
                      <span>차종</span>
                      <p>{recommendedCarModel}</p>
                    </li>
                    {/* <li>
                      <span>평균 연비</span>
                      <p>{currentUserCalcEfficiency.averageEfficiency}km/L</p>
                    </li> */}
                  </ul>
                </MyPageContent>
              </>
            )}
          </div>
          {currentCarModel && (
            <div style={{ paddingTop: 50 }}>
              <MyPageContentTitle>
                이전 주유 기록 (최근 3개월)
                <AddRefuelButton
                  onClick={() => setAddingRefuelRecord(!addingRefuelRecord)}
                >
                  + 주유내역
                </AddRefuelButton>
                {addingRefuelRecord && (
                  <Modal
                    closeModal={() =>
                      setAddingRefuelRecord(!addingRefuelRecord)
                    }
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
                    {!records[0] ? (
                      <tr>
                        <td>주유내역이 존재하지 않습니다.</td>
                      </tr>
                    ) : (
                      records.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.oiling_date.substring(0, 10)}</td>
                            <td>{item.gas_type}</td>
                            <td>{item.gas_amount}L</td>
                            <td>{item.odometer}km</td>
                            <td>
                              <button
                                onClick={() =>
                                  setModifyingRefuelRecord(
                                    !modifyingRefuelRecord,
                                  )
                                }
                              >
                                수정
                              </button>
                              {modifyingRefuelRecord && (
                                <Modal
                                  closeModal={() =>
                                    setModifyingRefuelRecord(
                                      !modifyingRefuelRecord,
                                    )
                                  }
                                >
                                  <ModifyRecord _id={item._id} />
                                </Modal>
                              )}
                              <button
                                onClick={() =>
                                  setDeletingRefuelRecord(!deletingRefuelRecord)
                                }
                              >
                                삭제
                              </button>
                              {deletingRefuelRecord && (
                                <ConfirmModal
                                  closeModal={() =>
                                    setDeletingRefuelRecord(
                                      !deletingRefuelRecord,
                                    )
                                  }
                                >
                                  <DeleteRecord _id={item._id} />
                                </ConfirmModal>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </RefuelWrap>
            </div>
          )}
        </MyPageContentWrapper>
      </MyPageWrapper>
    </>
  );
}

export default MyInfo;

const MyPageWrapper = styled.div`
  display: flex;
  margin-left: 20vw;
  padding-bottom: 5rem;
  @media screen and (max-width: 720px) {
    margin-left: 15vw;
  }
`;

const MyPageContentWrapper = styled.div`
  text-align: center;
  padding-left: 3rem;
  display: inline;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 720px) {
    padding-left: 0rem;
  }
`;

const MyPageContentTitle = styled.p`
  text-align: left;
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: 500;
`;

const MyPageContent = styled.div`
  width: 50vw;
  height: auto;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
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
  @media screen and (max-width: 720px) {
    width: 70vw;
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
  transition: 0.3s ease-in-out all;
  &:hover {
    color: white;
    background-color: salmon;
  }
`;

const RefuelWrap = styled.div`
  width: 50vw;
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

const ReregisterCarBtn = styled.button`
  float: right;
  cursor: pointer;
  padding: 5px 10px 5px 10px;
  border-radius: 28px;
  border: none;
  font-size: 12px;
  color: #636363;
  transition: 0.3s ease-in-out all;
  &:hover {
    color: white;
    background-color: salmon;
  }
`;

const NewRegisterCarDesc = styled.p`
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 15px;
`;

const NewRegisterCarBtn = styled.button`
  cursor: pointer;
  padding: 5px 10px 5px 10px;
  margin-bottom: 15px;
  border-radius: 28px;
  border: none;
  font-size: 12px;
  color: #636363;
`;
