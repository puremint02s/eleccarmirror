import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/common/Header";
import { TestContents as tests } from "./Contents/test";
import { CAR } from "./Contents/result";
import Loading from "./Loading";
import {
  TitleWrapper,
  TestContentsWrapper,
  TestImageWrapper,
  TestButtonWrapper,
  TestUpButton,
  TestDownButton,
  Status,
  StatusBar,
} from "../../style/CarMbtiStyle";
import GreyQuestionCarImg from "assets/img/GreyQuestionCar.png";

function TestContents() {
  const [question, setQuestion] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleOnSelect = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setUserAnswer(prev => [...prev, value]);
    setQuestion(prev => prev + 1);
  };

  const handleMoveToResult = () => {
    const { result } = userAnswer.reduce(
      (
        acc: {
          [index: string]: any;
        },
        answer,
        index,
      ) => {
        acc[answer] = ++acc[answer];
        if (index === userAnswer.length - 1) {
          // 개수 비교해서 내보내기
          if (acc.c >= acc.e) acc["result"] = acc["result"].concat("c");
          else acc["result"] = acc["result"].concat("e");

          if (acc.f >= acc.w) acc["result"] = acc["result"].concat("f");
          else acc["result"] = acc["result"].concat("w");

          if (acc.b >= acc.a) acc["result"] = acc["result"].concat("b");
          else acc["result"] = acc["result"].concat("a");

          if (acc.h >= acc.n) acc["result"] = acc["result"].concat("h");
          else acc["result"] = acc["result"].concat("n");
        }
        return acc;
      },
      { c: 0, e: 0, f: 0, w: 0, b: 0, a: 0, h: 0, n: 0, result: "" },
    );
    setTimeout(() => {
      navigate(`/mbtiresult/${CAR[result]}`);
    }, Math.floor(Math.random() * 1000 + 2000));
    return <Loading />;
  };

  if (!tests[question]) return handleMoveToResult();
  return (
    <TestContentsWrapper>
      <Header />
      <TitleWrapper>
        <p>{tests[question].question}</p>
      </TitleWrapper>
      <TestImageWrapper>
        <img src={GreyQuestionCarImg} style={{ width: 200 }} />
      </TestImageWrapper>
      <TestButtonWrapper>
        <div style={{ display: "inline-block" }}>
          <TestUpButton
            onClick={handleOnSelect}
            value={tests[question].selection[0].value}
          >
            {tests[question].selection[0].answer}
          </TestUpButton>
        </div>
        <div style={{ display: "inline-block" }}>
          <TestDownButton
            onClick={handleOnSelect}
            value={tests[question].selection[1].value}
          >
            {tests[question].selection[1].answer}
          </TestDownButton>
        </div>
      </TestButtonWrapper>
      <StatusBar>
        <Status
          style={{ width: `${Math.round((question / tests.length) * 100)}%` }}
        />
      </StatusBar>
    </TestContentsWrapper>
  );
}

export default TestContents;
