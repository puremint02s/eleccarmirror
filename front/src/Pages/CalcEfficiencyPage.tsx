import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CalcTitleWrapper,
  CalcSubTitleWrapper,
  CalcFormWrapper,
  CalcInputTitle,
  CalcInput,
  CalcSkipButton,
  CalcButton,
  CalcButtonWrapper,
} from "../style/CalcEfficiencyStyle";

// interface GasOption {
//   value: string;
//   name: string;
// }

function CalcEfficiencyPage() {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const OPTIONS = [
    { value: "none", name: "선택해주세요" },
    { value: "gasoline", name: "휘발유" },
    { value: "diesel", name: "경유" },
  ];
  const SelectBox = (props: any) => {
    return (
      <select>
        {props.options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    );
  };

  const SkipCalcAndGoFinalResult = () => navigate("/finalresult"); // 연비계산 없이 최종 결과 페이지

  return (
    <div>
      <CalcTitleWrapper>내 차의 평균 연비 계산하기</CalcTitleWrapper>
      <CalcSubTitleWrapper>
        계산된 평균 연비로 나에게 알맞은 전기차를 추천해드리겠습니다.
      </CalcSubTitleWrapper>
      <CalcFormWrapper>
        <CalcInputTitle>주유 날짜</CalcInputTitle>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        <CalcInputTitle>유종</CalcInputTitle>
        <SelectBox options={OPTIONS} />
        <CalcInputTitle>주유량(L)</CalcInputTitle>
        <CalcInput placeholder="10"></CalcInput>
        <CalcInputTitle>누적 주행 거리(km)</CalcInputTitle>
        <CalcInput placeholder="15000"></CalcInput>
        <CalcButtonWrapper>
          <CalcSkipButton onClick={SkipCalcAndGoFinalResult}>
            건너뛰기
          </CalcSkipButton>
          <CalcButton>등록하기</CalcButton>
        </CalcButtonWrapper>
      </CalcFormWrapper>
    </div>
  );
}

export default CalcEfficiencyPage;
