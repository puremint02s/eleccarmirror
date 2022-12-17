import React from "react";
import { LoadingWrapper } from "style/CarMbtiStyle";
import blueCar from "assets/img/BlueCar.png";
import loading from "assets/img/loading2.gif";
import { size } from "lodash";

function Loading() {
  return (
    <LoadingWrapper>
      <div>
        <img style={{ width: "170px" }} src={blueCar}></img>
        <img style={{ width: "100px" }} src={loading}></img>
      </div>
      <span style={{ fontSize: "1.5em", marginTop: "40px" }}>
        어울리는 전기차를 찾으러 가는 중...
      </span>
    </LoadingWrapper>
  );
}

export default Loading;
