import { useEffect, useState } from "react";
import styled from "styled-components";
import AddressPopUp from "components/SignUp/AddressPopUp";
import { currentUserGet, modifyUserInfo } from "apis/UserApi";

function ModifyInfo() {
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [carOwned, setCarOwned] = useState(false);
  const [elecCarOwned, setElecCarOwned] = useState(false);

  useEffect(() => {
    async function getUserInfo() {
      const res = await currentUserGet();
      setUserEmail(res.data.email);
      setUserId(res.data.id);
      setNickname(res.data.nickname);
      setAge(res.data.age);
      setInputAddress(res.data.address);
      setCarOwned(res.data.car_owned);
      setElecCarOwned(res.data.elec_car_owend);
    }
    getUserInfo();
  }, []);

  async function editUserInfo(e: any) {
    e.preventDefault();
    try {
      await modifyUserInfo(
        userEmail,
        userId,
        nickname,
        age,
        inputAddress,
        carOwned,
        elecCarOwned,
      );
      window.alert("회원정보가 수정되었습니다.");
      location.reload();
    } catch (e) {
      console.log(e);
      alert("회원정보 수정에 실패하였습니다.");
    }
  }
  const [addressPopUpOpen, setAddressPopUpOpen] = useState(false);
  const popUpOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddressPopUpOpen(true);
  };

  function getSelectedValue(event: React.ChangeEvent<HTMLSelectElement>) {
    setAge(event.target.value);
  }

  const handleModifyInfoCancel = () => location.reload();

  return (
    <>
      {addressPopUpOpen && (
        <AddressPopUp
          setAddressPopUpOpen={setAddressPopUpOpen}
          setInputAddress={setInputAddress}
        />
      )}
      <ModifyInfoWrapper>
        <ModifyInfoContentWrapper>
          <ModifyInfoContentSubWrapper>
            <ModifyInfoTitle>회원정보 수정</ModifyInfoTitle>
            <form onSubmit={editUserInfo}>
              <ModifyInfoContent>
                <ModifyInfoContentSubTitle>기본정보</ModifyInfoContentSubTitle>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>이메일</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoContentInput
                      placeholder={userEmail}
                      onChange={e => setUserEmail(e.target.value)}
                    ></ModifyInfoContentInput>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>아이디</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoContentInput
                      placeholder={userId}
                      onChange={e => setUserId(e.target.value)}
                    ></ModifyInfoContentInput>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>닉네임</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoContentInput
                      placeholder={nickname}
                      onChange={e => setNickname(e.target.value)}
                    ></ModifyInfoContentInput>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>나이</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoAgeSelect onChange={getSelectedValue}>
                      <option value="20대">20대</option>
                      <option value="30대">30대</option>
                      <option value="40대">40대</option>
                      <option value="50대">50대</option>
                      <option value="60대 이상">60대 이상</option>
                    </ModifyInfoAgeSelect>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>주소</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoAddressInput
                      placeholder={inputAddress}
                    ></ModifyInfoAddressInput>
                    <AddressSearchBtn onClick={popUpOpen}>
                      주소 검색
                    </AddressSearchBtn>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>
                    차량 소지 여부
                  </ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <label>
                      <input
                        type="radio"
                        name="hasCar"
                        // checked={carOwned}
                        onChange={e => {
                          setCarOwned(e.target.checked);
                        }}
                      />
                      예
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="hasCar"
                        // checked={!carOwned}
                        onChange={e => {
                          setCarOwned(e.target.checked);
                        }}
                      />
                      아니요
                    </label>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>
                    전기차 소지 여부
                  </ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <label>
                      <input
                        type="radio"
                        name="hasElecCar"
                        // checked={elecCarOwned}
                        onChange={e => {
                          setElecCarOwned(e.target.checked);
                        }}
                      />
                      예
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="hasElecCar"
                        // checked={!elecCarOwned}
                        onChange={e => {
                          setElecCarOwned(e.target.checked);
                        }}
                      />
                      아니요
                    </label>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle></ModifyInfoContentTitle>
                  <ModifyInfoContentBtnWrapper>
                    <ModifyInfoBtn type="submit">
                      회원정보 수정하기
                    </ModifyInfoBtn>
                    <ModifyInfoCancelBtn onClick={handleModifyInfoCancel}>
                      취소
                    </ModifyInfoCancelBtn>
                  </ModifyInfoContentBtnWrapper>
                </ModifyInfoContentTr>
              </ModifyInfoContent>
            </form>
          </ModifyInfoContentSubWrapper>
        </ModifyInfoContentWrapper>
      </ModifyInfoWrapper>
    </>
  );
}

export default ModifyInfo;

const ModifyInfoWrapper = styled.div`
  display: flex;
  margin-left: 20vw;
  @media screen and (max-width: 720px) {
    margin-left: 15vw;
  }
`;

const ModifyInfoContentWrapper = styled.div`
  text-align: center;
  padding-left: 3rem;
  display: inline;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 720px) {
    padding-left: 0rem;
  }
`;

const ModifyInfoContentSubWrapper = styled.div`
  padding-top: 100px;
`;

const ModifyInfoTitle = styled.p`
  text-align: left;
  padding-bottom: 15px;
  font-size: 20px;
`;

const ModifyInfoContentSubTitle = styled.caption`
  text-align: left;
  padding: 1rem 0 1rem 1rem;
  background-color: #efefef;
  border: 1px solid #cfcfcf;
  color: #414858;
  font-weight: bold;
`;

const ModifyInfoContent = styled.table`
  width: 50vw;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 2px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  @media screen and (max-width: 720px) {
    width: 70vw;
  }
`;

const ModifyInfoContentTitle = styled.td`
  width: 20%;
  text-align: left;
  padding-left: 1rem;
  font-size: 15px;
`;

const ModifyInfoContentTr = styled.tr`
  height: 3rem;
`;

const ModifyInfoContentInputWrapper = styled.td`
  width: 80%;
  text-align: left;
`;
const ModifyInfoContentBtnWrapper = styled.td`
  width: 80%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: left;
`;

const ModifyInfoContentInput = styled.input`
  width: 96%;
  height: 2rem;
  text-align: left;
  border: 1px solid #e0e0e0;
  padding-left: 10px;
`;

const ModifyInfoAgeSelect = styled.select`
  width: 20%;
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
`;

const ModifyInfoAddressInput = styled.input`
  width: 79.5%;
  height: 2rem;
  text-align: left;
  border: 1px solid #e0e0e0;
  padding-left: 10px;
`;

const AddressSearchBtn = styled.button`
  width: 15%;
  height: 2.3rem;
  background-color: #303030;
  border: 1px solid #303030;
  color: white;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const ModifyInfoBtn = styled.button`
  width: 9rem;
  height: 2.3rem;
  background-color: #303030;
  border: 1px solid #303030;
  color: white;
  margin-left: 0.5rem;
  cursor: pointer;
  display: inline;
`;

const ModifyInfoCancelBtn = styled.button`
  width: 9rem;
  height: 2.3rem;
  background-color: white;
  border: 1px solid #303030;
  color: black;
  margin-left: 0.5rem;
  cursor: pointer;
  display: inline;
`;
