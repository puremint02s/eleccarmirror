import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import Header from "components/common/Header";
import {
  CalcFormDiv,
  CalcFormWrapper,
  CalcInputTitle,
  CalcInput,
  Select,
  CalcButtonWrapper,
} from "style/CalcEfficiencyStyle";
import { ModifyRefuelRecord } from "apis/RefuelRecordApi";

function ModifyRecord() {
  const [startDate, setStartDate] = useState(new Date());

  const [oilingDate, setOilingDate] = useState("2022-12-1");
  const [gasType, setGasType] = useState("휘발유");
  const [gasAmount, setGasAmount] = useState(0);
  const [odometer, setOdometer] = useState(0);
  const [currentRecordId, setCurrentRecordId] = useState("");

  async function ModifyCurrentRefuelRecord(e: any) {
    e.preventDefault();
    try {
      const res = await ModifyRefuelRecord(
        currentRecordId, // 현재 기록 고유 _id
        oilingDate,
        gasType,
        gasAmount,
        odometer,
      );
      window.alert("주유기록이 수정되었습니다.");
      window.location.replace("/mypage");
    } catch (e) {
      console.log(e);
      alert("주유기록 수정에 실패하였습니다.");
    }
  }

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
        <ModifyRefuelRecordFormWrapper>
          <CalcFormDiv>
            <CalcFormWrapper onSubmit={ModifyCurrentRefuelRecord}>
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
              <CalcInput
                type="number"
                placeholder="10"
                onChange={e => setGasAmount(parseInt(e.target.value))}
              ></CalcInput>
              <CalcInputTitle>누적 주행 거리(km)</CalcInputTitle>
              <CalcInput
                type="number"
                placeholder="15000"
                onChange={e => setOdometer(parseInt(e.target.value))}
              ></CalcInput>
              <CalcButtonWrapper>
                <ModifyButton type="submit">수정하기</ModifyButton>
                <Link to="/mypage">
                  <CancelButton>취소하기</CancelButton>
                </Link>
              </CalcButtonWrapper>
            </CalcFormWrapper>
          </CalcFormDiv>
        </ModifyRefuelRecordFormWrapper>
      </ModifyRefuelRecordWrapper>
    </>
  );
}

export default ModifyRecord;

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
