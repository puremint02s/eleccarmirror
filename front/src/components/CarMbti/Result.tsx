import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CAR, RESULT_CAR } from "./Contents/result";

function Result() {
  const navigate = useNavigate();
  const [carName, setCarName] = useState<string>("");

  const { car } = useParams<{
    car: string;
  }>();

  useEffect(() => {
    const carName = Object.values(CAR).find((value) => value === car);
    if (!carName) return navigate("/404");
    setCarName(carName);
  }, [car, navigate]);

  const handleClickRetry = () => navigate("/test");

  if (!carName) return <></>;
  return (
    <div>
      <div>
        <div>
          <p>{RESULT_CAR[carName].name}</p>
        </div>
        <div>
          <ul>
            {RESULT_CAR[carName].desc
              .split("/")
              .filter((item) => item !== "/")
              .map((item, idx) => (
                <li key={item + idx}>{item}</li>
              ))}
          </ul>
        </div>
        <button onClick={handleClickRetry}>테스트 다시 하기</button>
        <button>다음 테스트</button>
      </div>
    </div>
  );
}

export default Result;
