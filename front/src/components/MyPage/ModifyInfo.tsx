import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Header from "components/common/Header";
import Sidebar from "components/MyPage/Sidebar";
import AddressPopUp from "components/SignUp/AddressPopUp";

const dummyUserData = {
  email: "test@test.com",
  password: "testtest123",
  nickname: "테스트",
  age: 2,
  address: "서울시 마포구 XX로 XX",
};

const dummyMyCarData = {
  model: "아반떼",
  brand: "현대",
  MPG: 10,
};

const AgeOptions = [
  { value: 2, age: "20대" },
  { value: 3, age: "30대" },
  { value: 4, age: "40대" },
  { value: 5, age: "50대" },
  { value: 6, age: "60대 이상" },
];

const CarOptions = [
  { value: 1, brand: "현대", model: "아반떼" },
  { value: 2, brand: "기아", model: "모닝" },
  { value: 3, brand: "제네시스", model: "G80" },
  { value: 4, brand: "르노코리아", model: "XM3" },
  { value: 5, brand: "쉐보레", model: "스파크" },
  { value: 6, brand: "쌍용", model: "렉스턴" },
];

interface AgeOption {
  value: number;
  age: string;
}

function ModifyInfo() {
  const navigate = useNavigate();
  const handleModifyInfoCancel = () => navigate("/mypage");

  const [addressPopUpOpen, setAddressPopUpOpen] = useState(false);
  const popUpOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddressPopUpOpen(true);
  };

  const AgeSelectBox = (props: any) => {
    return (
      <ModifyInfoAgeSelect>
        {props.options.map((option: AgeOption) => (
          <option key={option.value}>{option.age}</option>
        ))}
      </ModifyInfoAgeSelect>
    );
  };

  const BrandSelectBox = (props: any) => {
    return (
      <ModifyCarInfoModelSelect>
        {props.options.map((option: { value: number; brand: string }) => (
          <option key={option.value}>{option.brand}</option>
        ))}
      </ModifyCarInfoModelSelect>
    );
  };

  const ModelSelectBox = (props: any) => {
    return (
      <ModifyCarInfoModelSelect>
        {props.options.map((option: { value: number; model: string }) => (
          <option key={option.value}>{option.model}</option>
        ))}
      </ModifyCarInfoModelSelect>
    );
  };

  return (
    <>
      {addressPopUpOpen && (
        <AddressPopUp setAddressPopUpOpen={setAddressPopUpOpen} />
      )}
      <Header />
      <TitleWrapper>마이 페이지</TitleWrapper>
      <ModifyInfoWrapper>
        <Sidebar />
        <ModifyInfoContentWrapper>
          <div style={{ paddingTop: 100 }}>
            <ModifyInfoTitle>회원정보 수정</ModifyInfoTitle>
            <form>
              <ModifyInfoContent>
                <ModifyInfoContentSubTitle>기본정보</ModifyInfoContentSubTitle>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>이메일</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoContentInput
                      placeholder={dummyUserData.email}
                    ></ModifyInfoContentInput>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>닉네임</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoContentInput
                      placeholder={dummyUserData.nickname}
                    ></ModifyInfoContentInput>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>비밀번호</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoContentInput
                      placeholder={dummyUserData.password}
                    ></ModifyInfoContentInput>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>비밀번호 확인</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoContentInput />
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>나이</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <AgeSelectBox options={AgeOptions} />
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle>주소</ModifyInfoContentTitle>
                  <ModifyInfoContentInputWrapper>
                    <ModifyInfoAddressInput
                      placeholder={dummyUserData.address}
                    ></ModifyInfoAddressInput>
                    <AddressSearchBtn onClick={popUpOpen}>
                      주소 검색
                    </AddressSearchBtn>
                  </ModifyInfoContentInputWrapper>
                </ModifyInfoContentTr>
                <ModifyInfoContentTr>
                  <ModifyInfoContentTitle></ModifyInfoContentTitle>
                  <ModifyInfoContentBtnWrapper>
                    <ModifyInfoBtn>회원정보 수정하기</ModifyInfoBtn>
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
                      <span>차종</span>
                      <p>
                        <ModelSelectBox options={CarOptions} />
                      </p>
                    </li>
                    <li>
                      <span>제조사</span>
                      <p>
                        <BrandSelectBox options={CarOptions} />
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
          </div>
        </ModifyInfoContentWrapper>
      </ModifyInfoWrapper>
    </>
  );
}

export default ModifyInfo;

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
  font-weight: 500;
`;

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
