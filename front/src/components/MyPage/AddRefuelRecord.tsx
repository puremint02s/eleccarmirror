import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import {
  CalcFormDiv,
  CalcFormWrapper,
  CalcInputTitle,
  CalcInput,
  Select,
  CalcButtonWrapper,
} from "style/CalcEfficiencyStyle";
import { currentUserGet } from "apis/UserApi";
import { AddRefuelRecord } from "apis/RefuelRecordApi";

function AddNewRefuelRecord() {
  const [oilingDate, setOilingDate] = useState(new Date());
  const [gasType, setGasType] = useState("휘발유");
  const [gasAmount, setGasAmount] = useState(0);
  const [odometer, setOdometer] = useState(0);
  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      const res = await currentUserGet();
      setCurrentUserId(res.data.user_id);
    }
    getUserInfo();
  }, []);

  async function NewOilingRecord(e: any) {
    e.preventDefault();
    try {
      const res = await AddRefuelRecord(
        currentUserId, // 현재 로그인 유저 아이디 전역에서 관리하는 거 받아오기
        oilingDate,
        gasType,
        gasAmount,
        odometer,
      );
      console.log(res);
      window.alert("주유기록이 등록되었습니다.");
      window.location.replace("/mypage");
    } catch (e) {
      console.log(e);
      alert("주유기록 등록에 실패하였습니다.");
    }
  }

  function getSelectedValue(event: React.ChangeEvent<HTMLSelectElement>) {
    setGasType(event.target.value);
  }

  return (
    <>
      <ModifyRefuelRecordWrapper>
        <ModifyRefuelRecordFormWrapper>
          <CalcFormDiv>
            <CalcFormWrapper onSubmit={NewOilingRecord}>
              <CalcInputTitle>주유 날짜</CalcInputTitle>
              <DatePicker
                selected={oilingDate}
                onChange={(date: Date) => setOilingDate(date)}
                dateFormatCalendar="yyyy.MM"
                customInput={<CalcInput />}
              />
              <CalcInputTitle>유종</CalcInputTitle>
              <Select onChange={getSelectedValue}>
                <option value="휘발유">휘발유</option>
                <option value="경유">경유</option>
              </Select>
              <CalcInputTitle>주유량(L)</CalcInputTitle>
              <CalcInput
                type="number"
                placeholder="10"
                onChange={e => setGasAmount(parseInt(e.target.value))}
              />
              <CalcInputTitle>누적 주행 거리(km)</CalcInputTitle>
              <CalcInput
                type="number"
                placeholder="15000"
                onChange={e => setOdometer(parseInt(e.target.value))}
              />
              <CalcButtonWrapper>
                <ModifyButton type="submit">추가하기</ModifyButton>
              </CalcButtonWrapper>
            </CalcFormWrapper>
          </CalcFormDiv>
        </ModifyRefuelRecordFormWrapper>
      </ModifyRefuelRecordWrapper>
    </>
  );
}

export default AddNewRefuelRecord;

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
  height: 50px;
  cursor: pointer;
  color: white;
  background-color: #0a84ff;
  margin-top: 1rem;
  margin-right: 1rem;
  display: inline-block;
`;
