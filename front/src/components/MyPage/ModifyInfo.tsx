import { useEffect, useState } from "react";
import styled from "styled-components";
import AddressPopUp from "components/SignUp/AddressPopUp";
import { currentUserGet, modifyUserInfo } from "apis/UserApi";

const dummyMyCarData = {
  model: "아반떼",
  brand: "현대",
  MPG: 10,
};

function ModifyInfo() {
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [nickname, setNickname] = useState("");
  // const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [carOwned, setCarOwned] = useState(false);
  const [elecCarOwned, setElecCarOwned] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      const res = await currentUserGet();
      setUserEmail(res.data.email);
      setUserId(res.data.id);
      setNickname(res.data.nickname);
      // setPassword(res.data.password);
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

  function getSelectedBrand(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedBrand(event.target.value);
  }

  function getSelectedModel(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedModel(event.target.value);
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
                {/* <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>비밀번호</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoContentInput
                      placeholder={password}
                      onChange={e => setPassword(e.target.value)}
                    ></ModifyInfoContentInput>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>비밀번호 확인</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoContentInput />
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr> */}
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
                        checked={carOwned}
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
                        checked={!carOwned}
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
                        checked={elecCarOwned}
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
                        checked={!elecCarOwned}
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
                    <ModifyInfoBtn>회원 탈퇴하기</ModifyInfoBtn>
                    <ModifyInfoCancelBtn onClick={handleModifyInfoCancel}>
                      취소
                    </ModifyInfoCancelBtn>
                  </ModifyInfoContentBtnWrapper>
                </ModifyInfoContentTr>
              </ModifyInfoContent>
            </form>
            <form>
              <ModifyInfoContent>
                <ModifyInfoContentSubTitle>차량정보</ModifyInfoContentSubTitle>
                <MyPageContent>
                  <ul>
                    <li>
                      <span>제조사</span>
                      <p>
                        <ModifyCarInfoModelSelect onChange={getSelectedBrand}>
                          <option value="현대">현대</option>
                          <option value="기아">기아</option>
                          <option value="쌍용">쌍용</option>
                          <option value="제네시스">제네시스</option>
                          <option value="르노코리아">르노코리아</option>
                          <option value="쉐보레">쉐보레</option>
                        </ModifyCarInfoModelSelect>
                      </p>
                    </li>
                    <li>
                      <span>차종</span>
                      <p>
                        {selectedBrand === "현대" ? (
                          <ModifyCarInfoModelSelect onChange={getSelectedModel}>
                            <option value="아반떼">아반떼</option>
                            <option value="쏘나타">쏘나타</option>
                            <option value="그랜저">그랜저</option>
                            <option value="팰리세이드">팰리세이드</option>
                            <option value="캐스퍼">캐스퍼</option>
                            <option value="싼타페">싼타페</option>
                            <option value="투싼">투싼</option>
                            <option value="코나">코나</option>
                            <option value="베뉴">베뉴</option>
                          </ModifyCarInfoModelSelect>
                        ) : selectedBrand === "기아" ? (
                          <ModifyCarInfoModelSelect onChange={getSelectedModel}>
                            <option value="K3">K3</option>
                            <option value="K5">K5</option>
                            <option value="K8">K8</option>
                            <option value="K9">K9</option>
                            <option value="쏘렌토">쏘렌토</option>
                            <option value="카니발">카니발</option>
                            <option value="스포티지">스포티지</option>
                            <option value="레이">레이</option>
                            <option value="셀토스">셀토스</option>
                          </ModifyCarInfoModelSelect>
                        ) : selectedBrand === "쌍용" ? (
                          <ModifyCarInfoModelSelect onChange={getSelectedModel}>
                            <option value="토레스">토레스</option>
                            <option value="렉스턴 스포츠">렉스턴 스포츠</option>
                            <option value="렉스턴 스포츠 칸">
                              렉스턴 스포츠 칸
                            </option>
                            <option value="렉스턴">렉스턴</option>
                            <option value="티볼리">티볼리</option>
                          </ModifyCarInfoModelSelect>
                        ) : selectedBrand === "제네시스" ? (
                          <ModifyCarInfoModelSelect onChange={getSelectedModel}>
                            <option value="G80">G80</option>
                            <option value="G90">G90</option>
                            <option value="GV70">GV70</option>
                          </ModifyCarInfoModelSelect>
                        ) : selectedBrand === "르노코리아" ? (
                          <ModifyCarInfoModelSelect onChange={getSelectedModel}>
                            <option value="QM6">QM6</option>
                            <option value="XM3">XM3</option>
                            <option value="SM6">SM6</option>
                          </ModifyCarInfoModelSelect>
                        ) : (
                          <ModifyCarInfoModelSelect onChange={getSelectedModel}>
                            <option value="트레일블레이저">
                              트레일블레이저
                            </option>
                            <option value="스파크">스파크</option>
                          </ModifyCarInfoModelSelect>
                        )}
                      </p>
                    </li>
                    <li>
                      <span>평균 연비</span>
                      <p>{dummyMyCarData.MPG}km/L</p>
                    </li>
                  </ul>
                </MyPageContent>
              </ModifyInfoContent>
              <CarInfoModifyBtnWrapper>
                <ModifyInfoBtn>차량정보 수정하기</ModifyInfoBtn>
                <ModifyInfoCancelBtn onClick={handleModifyInfoCancel}>
                  취소
                </ModifyInfoCancelBtn>
              </CarInfoModifyBtnWrapper>
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
`;

const ModifyInfoContentWrapper = styled.div`
  text-align: center;
  padding-left: 3rem;
  display: inline;
  flex-direction: column;
  justify-content: center;
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
  width: 50rem;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 2px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
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

const ModifyCarInfoModelSelect = styled.select`
  width: 100px;
  height: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  text-align: center;
`;

const MyPageContent = styled.div`
  width: 50rem;
  height: auto;
  text-align: center;
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

const CarInfoModifyBtnWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
`;
