import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import Header from "components/common/Header";
import Sidebar from "components/MyPage/Sidebar";
import {
  CalcFormDiv,
  CalcFormWrapper,
  CalcInputTitle,
  CalcInput,
  Select,
  CalcButtonWrapper,
} from "style/CalcEfficiencyStyle";

function ModifyRefuelRecord() {
  const [startDate, setStartDate] = useState(new Date());
  const OPTIONS = [
    { value: "none", name: "선택해주세요" },
    { value: "gasoline", name: "휘발유" },
    { value: "diesel", name: "경유" },
  ];
  const SelectBox = (props: any) => {
    return (
      <Select>
        {props.options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
    );
  };

  return (
    <>
      <Header />
      <TitleWrapper>마이 페이지</TitleWrapper>
      <ModifyRefuelRecordWrapper>
        <Sidebar />
        <ModifyRefuelRecordFormWrapper>
          <CalcFormDiv>
            <CalcFormWrapper>
              <CalcInputTitle>주유 날짜</CalcInputTitle>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                locale="ko"
                dateFormatCalendar="yyyy.MM"
                customInput={<CalcInput />}
              />
              <CalcInputTitle>유종</CalcInputTitle>
              <SelectBox options={OPTIONS} />
              <CalcInputTitle>주유량(L)</CalcInputTitle>
              <CalcInput placeholder="10"></CalcInput>
              <CalcInputTitle>누적 주행 거리(km)</CalcInputTitle>
              <CalcInput placeholder="15000"></CalcInput>
            </CalcFormWrapper>
          </CalcFormDiv>
          <CalcButtonWrapper>
            <ModifyButton>수정하기</ModifyButton>
            <Link to="/mypage">
              <CancelButton>취소하기</CancelButton>
            </Link>
          </CalcButtonWrapper>
        </ModifyRefuelRecordFormWrapper>
      </ModifyRefuelRecordWrapper>
    </>
  );
}

export default ModifyRefuelRecord;

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
  font-weight: 500;
`;

const ModifyRefuelRecordWrapper = styled.div`
  display: flex;
`;

const ModifyRefuelRecordFormWrapper = styled.div`
  padding-top: 30px;
  padding-left: 150px;
`;

const ModifyButton = styled.button`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  width: 130px;
  cursor: pointer;
  color: white;
  background-color: #0a84ff;
  margin-top: 1rem;
  margin-right: 1rem;
  display: inline-block;
`;

const CancelButton = styled.button`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  width: 130px;
  cursor: pointer;
  background-color: #f6f6f6;
  margin-top: 1rem;
  display: inline-block;
`;
