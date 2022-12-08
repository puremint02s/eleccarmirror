import { useState } from "react";
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

interface GasOption {
  value: string;
  name: string;
}

interface OptionsProps {
  options: GasOption;
}

function CalcEfficiencyPage() {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const OPTIONS: Array<GasOption> = [
    { value: "none", name: "선택해주세요" },
    { value: "gasoline", name: "휘발유" },
    { value: "diesel", name: "경유" },
  ];
  const SelectBox = (props: any) => {
    return (
      <Select>
        {props.options.map((option: GasOption) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
    );
  };

  const SkipCalcAndGoFinalResult = () => navigate("/finalresult");
  // 연비 계산하는 버튼 연결 함수

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
        <CalcSkipButton onClick={SkipCalcAndGoFinalResult}>
          건너뛰기
        </CalcSkipButton>
        <CalcButton>계산하기</CalcButton>
      </CalcButtonWrapper>
    </CalcEfficiencyWrapper>
  );
}

export default CalcEfficiencyPage;
