import React, { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TestContents as tests } from "./Contents/test";
import { CAR } from "./Contents/result";
import Loading from "./Loading";

function TestContents() {
  const [q, setQ] = useState<number>(0);
  const [userAns, setUserAns] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleOnSelect = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setUserAns((prev) => [...prev, value]);
    setQ((prev) => prev + 1);
  };

  const handleMoveToResult = () => {
    const { result } = userAns.reduce(
      (
        acc: {
          [index: string]: any;
        },
        ans,
        index
      ) => {
        acc[ans] = ++acc[ans];
        if (index === userAns.length - 1) {
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
      { c: 0, e: 0, f: 0, w: 0, b: 0, a: 0, h: 0, n: 0, result: "" }
    );
    setTimeout(() => {
      navigate(`/result/${CAR[result]}`);
    }, Math.floor(Math.random() * 1000 + 2000));
    return <Loading />;
  };

  if (!tests[q]) return handleMoveToResult();
  return (
    <div>
      {/* <div>
          <div style={{ width: `${Math.round((q / tests.length) * 100)}%` }} />
        </div> */}
      <div>
        <p>질문 {q + 1}</p>
        <p>{tests[q].question}</p>
      </div>
      <div>
        <button onClick={handleOnSelect} value={tests[q].selection[0].value}>
          {tests[q].selection[0].answer}
        </button>
        <button onClick={handleOnSelect} value={tests[q].selection[1].value}>
          {tests[q].selection[1].answer}
        </button>
      </div>
    </div>
  );
}

export default TestContents;
