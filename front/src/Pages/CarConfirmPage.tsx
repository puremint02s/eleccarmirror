import React, { useState } from "react";
import * as C from "../style/CarConfirmStyle";
import * as B from "components/common/Button";
import CarImageForm from "components/CarRegister/CarImageForm";

function CarRegisterPage() {
  return (
    <div>
      <C.titleWrapper>이 차가 맞나요?</C.titleWrapper>
      <C.subTitleWrapper>제조사</C.subTitleWrapper>
      <C.textWrapper>자동차 전체사진을 올려주세요!</C.textWrapper>
      <C.textBox />
      <C.imageBox />
    </div>
  );
}

export default CarRegisterPage;
