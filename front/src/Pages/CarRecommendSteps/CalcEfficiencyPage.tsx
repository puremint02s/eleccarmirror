import { useState, useCallback } from "react";
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

function CalcEfficiencyPage() {
  const navigate = useNavigate();

  const [firstRefuelRecord, setFirstRefuelRecord] = useState(0);
  const [firstOilingDate, setFirstOilingDate] = useState(new Date());
  const [firstDistance, setFirstDistance] = useState(0);
  const [firstGasType, setFirstGasType] = useState("");

  const [secondRefuelRecord, setSecondRefuelRecord] = useState(0);
  const [secondOilingDate, setSecondOilingDate] = useState(new Date());
  const [secondDistance, setSecondDistance] = useState(0);
  const [secondGasType, setSecondGasType] = useState("");

  const onChangeFirstRefuel = useCallback((e: any) => {
    const currFirstRefuel = e.target.value;
    setFirstRefuelRecord(currFirstRefuel);
  }, []);

  const onChangeSecondRefuel = useCallback((e: any) => {
    const currSecondRefuel = e.target.value;
    setSecondRefuelRecord(currSecondRefuel);
  }, []);

  const onChangeFirstDistance = useCallback((e: any) => {
    const currFirstDistance = e.target.value;
    setFirstDistance(currFirstDistance);
  }, []);

  const onChangeSecondDistance = useCallback((e: any) => {
    const currSecondDistance = e.target.value;
    setSecondDistance(currSecondDistance);
  }, []);

  function getSelectedFirstValue(event: React.ChangeEvent<HTMLSelectElement>) {
    setFirstGasType(event.target.value);
  }

  function getSelectedSecondValue(event: React.ChangeEvent<HTMLSelectElement>) {
    setSecondGasType(event.target.value);
  }

  const SkipCalcAndGoFinalResult = () => navigate("/finalresult");
  const calcAverageEfficiency = (e: any) => {
    const AverageEfficiency =
      (secondDistance - firstDistance) / firstRefuelRecord;
    console.log(AverageEfficiency);
  };

  return (
    <CalcEfficiencyWrapper>
      <Header />
      <CalcTitleWrapper>내 차의 평균 연비 계산하기</CalcTitleWrapper>
      <CalcSubTitleWrapper>
        계산된 평균 연비로 나에게 알맞은 전기차를 추천해드리겠습니다.
      </CalcSubTitleWrapper>
      <CalcFormDiv>
        <CalcFormWrapper>
          <CalcInputTitle>주유 날짜</CalcInputTitle>
          <DatePicker
            selected={firstOilingDate}
            onChange={(date: Date) => setFirstOilingDate(date)}
            dateFormatCalendar="yyyy.MM"
            customInput={<CalcInput />}
          />
          <CalcInputTitle>유종</CalcInputTitle>
          <Select onChange={getSelectedFirstValue}>
            <option value="휘발유">휘발유</option>
            <option value="경유">경유</option>
          </Select>
          <CalcInputTitle>주유량(L)</CalcInputTitle>
          <CalcInput
            onChange={onChangeFirstRefuel}
            placeholder="10"
          ></CalcInput>
          <CalcInputTitle>누적 주행 거리(km)</CalcInputTitle>
          <CalcInput
            onChange={onChangeFirstDistance}
            placeholder="1500-"
          ></CalcInput>
        </CalcFormWrapper>
      </CalcFormDiv>
      <CalcFormDiv>
        <CalcFormWrapper>
          <CalcInputTitle>주유 날짜</CalcInputTitle>
          <DatePicker
            selected={secondOilingDate}
            onChange={(date: Date) => setSecondOilingDate(date)}
            dateFormatCalendar="yyyy.MM"
            customInput={<CalcInput />}
          />
          <CalcInputTitle>유종</CalcInputTitle>
          <Select onChange={getSelectedSecondValue}>
            <option value="휘발유">휘발유</option>
            <option value="경유">경유</option>
          </Select>
          <CalcInputTitle>주유량(L)</CalcInputTitle>
          <CalcInput
            onChange={onChangeSecondRefuel}
            placeholder="10"
          ></CalcInput>
          <CalcInputTitle>누적 주행 거리(km)</CalcInputTitle>
          <CalcInput
            onChange={onChangeSecondDistance}
            placeholder="15000"
          ></CalcInput>
        </CalcFormWrapper>
      </CalcFormDiv>
      <CalcButtonWrapper>
        <CalcSkipButton onClick={SkipCalcAndGoFinalResult}>
          건너뛰기
        </CalcSkipButton>
        <CalcButton onClick={calcAverageEfficiency}>계산하기</CalcButton>
      </CalcButtonWrapper>
    </CalcEfficiencyWrapper>
  );
}

export default CalcEfficiencyPage;
