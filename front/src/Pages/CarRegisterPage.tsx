import React, { useState } from "react";
import * as C from "../style/CarRegisterStyle";
import * as B from "components/common/Button";
import CarImageForm from "components/CarRegister/CarImageForm";

function CarRegisterPage() {
  return (
    <div>
      <C.titleWrapper>간편하게 나의 차량 등록하기</C.titleWrapper>
      <C.subTitleWrapper>
        차량 이미지를 업로드해보세요 제조사와 차종을 분류해드립니다.
      </C.subTitleWrapper>
      <C.textWrapper>자동차 전체사진을 올려주세요!</C.textWrapper>
      <C.textBox />
      <C.imageBox />
      <CarImageForm />
    </div>
  );
}

export default CarRegisterPage;
