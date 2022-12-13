import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "components/common/Header";
import {
  CalcEfficiencyWrapper,
  CalcTitleWrapper,
  CalcSubTitleWrapper,
  CalcFormDiv,
  CalcFormWrapper,
  CalcInputTitle,
  CalcInput,
  Select,
  CalcSkipButton,
  CalcButton,
  CalcButtonWrapper,
} from "style/CalcEfficiencyStyle";
import { currentUserGet } from "apis/UserApi";
import { AddRefuelRecord } from "apis/RefuelRecordApi";

function CalcEfficiencyPage() {
  const [firstOilingDate, setFirstOilingDate] = useState(new Date());
  const [firstGasType, setFirstGasType] = useState("휘발유");
  const [firstGasAmount, setFirstGasAmount] = useState(0);
  const [firstOdometer, setFirstOdometer] = useState(0);

  const [secondOilingDate, setSecondOilingDate] = useState(new Date());
  const [secondGasType, setSecondGasType] = useState("휘발유");
  const [secondGasAmount, setSecondGasAmount] = useState(0);
  const [secondOdometer, setSecondOdometer] = useState(0);

  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      const res = await currentUserGet();
      setCurrentUserId(res.data.user_id);
    }
    getUserInfo();
  }, []);

  function getSelectedValue(event: React.ChangeEvent<HTMLSelectElement>) {
    setFirstGasType(event.target.value);
  }
  function getSecondSelectedValue(event: React.ChangeEvent<HTMLSelectElement>) {
    setSecondGasType(event.target.value);
  }

  async function addOilingRecord(e: any) {
    e.preventDefault();
    try {
      await AddRefuelRecord(
        currentUserId,
        firstOilingDate,
        firstGasType,
        firstGasAmount,
        firstOdometer,
      );
      await AddRefuelRecord(
        currentUserId,
        secondOilingDate,
        secondGasType,
        secondGasAmount,
        secondOdometer,
      );
    } catch (e) {
      console.log(e);
      alert("주유기록 등록에 실패하였습니다.");
    }
  }

  const navigate = useNavigate();
  const SkipCalcAndGoFinalResult = () => navigate("/finalresult");
  const SubmitAndGotoFinalResult = () => navigate("/finalresult");

  return (
    <CalcEfficiencyWrapper>
      <Header />
      <CalcTitleWrapper>내 차의 평균 연비 계산하기</CalcTitleWrapper>
      <CalcSubTitleWrapper>
        계산된 평균 연비로 나에게 알맞은 전기차를 추천해드리겠습니다.
      </CalcSubTitleWrapper>
      <CalcFormDiv>
        <CalcFormWrapper onSubmit={addOilingRecord}>
          <CalcInputTitle>주유 날짜</CalcInputTitle>
          <DatePicker
            selected={firstOilingDate}
            onChange={(date: Date) => setFirstOilingDate(date)}
            dateFormatCalendar="yyyy.MM"
            customInput={<CalcInput />}
          />
          <DatePicker
            selected={secondOilingDate}
            onChange={(date: Date) => setFirstOilingDate(date)}
            dateFormatCalendar="yyyy.MM"
            customInput={<CalcInput />}
          />
          <CalcInputTitle>유종</CalcInputTitle>
          <Select onChange={getSelectedValue}>
            <option value="휘발유">휘발유</option>
            <option value="경유">경유</option>
          </Select>
          <Select onChange={getSecondSelectedValue}>
            <option value="휘발유">휘발유</option>
            <option value="경유">경유</option>
          </Select>
          <CalcInputTitle>주유량(L)</CalcInputTitle>
          <CalcInput
            type="number"
            placeholder="첫 번째 주유량을 입력해주세요."
            onChange={e => setFirstGasAmount(parseInt(e.target.value))}
          ></CalcInput>
          <CalcInput
            type="number"
            placeholder="두 번째 주유량을 입력해주세요."
            onChange={e => setSecondGasAmount(parseInt(e.target.value))}
          ></CalcInput>
          <CalcInputTitle>누적 주행 거리(km)</CalcInputTitle>
          <CalcInput
            type="number"
            placeholder="첫 번째 누적 주행 거리를 입력해주세요."
            onChange={e => setFirstOdometer(parseInt(e.target.value))}
          ></CalcInput>
          <CalcInput
            type="number"
            placeholder="두 번째 누적 주행 거리를 입력해주세요."
            onChange={e => setSecondOdometer(parseInt(e.target.value))}
          ></CalcInput>
          <CalcButtonWrapper>
            <CalcSkipButton onClick={SkipCalcAndGoFinalResult}>
              건너뛰기
            </CalcSkipButton>
            <CalcButton type="submit" onClick={SubmitAndGotoFinalResult}>
              등록하기
            </CalcButton>
          </CalcButtonWrapper>
        </CalcFormWrapper>
      </CalcFormDiv>
    </CalcEfficiencyWrapper>
  );
}

export default CalcEfficiencyPage;
