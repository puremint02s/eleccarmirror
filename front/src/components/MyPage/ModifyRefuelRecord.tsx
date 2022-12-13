import { useState } from "react";
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
import { modifyRefuelRecord } from "apis/RefuelRecordApi";

function ModifyRecord(_id: any) {
  const [oilingDate, setOilingDate] = useState(new Date());
  const [gasType, setGasType] = useState("휘발유");
  const [gasAmount, setGasAmount] = useState(0);
  const [odometer, setOdometer] = useState(0);

  function getSelectedValue(event: React.ChangeEvent<HTMLSelectElement>) {
    setGasType(event.target.value);
  }

  async function ModifyCurrentRefuelRecord(e: any) {
    e.preventDefault();
    try {
      await modifyRefuelRecord(_id, oilingDate, gasType, gasAmount, odometer);
      window.alert("주유기록이 수정되었습니다.");
      window.location.replace("/mypage");
    } catch (e) {
      console.log(e);
      alert("주유기록 수정에 실패하였습니다.");
    }
  }

  return (
    <>
      <ModifyRefuelRecordWrapper>
        <ModifyRefuelRecordFormWrapper>
          <CalcFormDiv>
            <CalcFormWrapper onSubmit={ModifyCurrentRefuelRecord}>
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
                placeholder="수정하려는 주유량을 입력해주세요."
                onChange={e => setGasAmount(parseInt(e.target.value))}
              ></CalcInput>
              <CalcInputTitle>누적 주행 거리(km)</CalcInputTitle>
              <CalcInput
                type="number"
                placeholder="수정하려는 누적 주행 거리를 입력해주세요."
                onChange={e => setOdometer(parseInt(e.target.value))}
              ></CalcInput>
              <CalcButtonWrapper>
                <ModifyButton type="submit">수정하기</ModifyButton>
              </CalcButtonWrapper>
            </CalcFormWrapper>
          </CalcFormDiv>
        </ModifyRefuelRecordFormWrapper>
      </ModifyRefuelRecordWrapper>
    </>
  );
}

export default ModifyRecord;

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
