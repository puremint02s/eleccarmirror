import React, { useState } from "react";
import * as C from "../../style/CarConfirmStyle";
import * as B from "components/common/Button";
import CarImageForm from "components/CarRegister/CarImageForm";

interface propsTypes {
  setConfirmPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fileImage: string;
}

function CarRegisterPage({ setConfirmPopUpOpen, fileImage }: propsTypes) {
  return (
    <>
      <C.popDim
        onClick={() => {
          setConfirmPopUpOpen(false);
        }}
      ></C.popDim>
      <C.popWrapper>
        <C.titleWrapper>이 차가 맞나요?</C.titleWrapper>
        <C.imgWrapper>
          <img src={fileImage}></img>
        </C.imgWrapper>
        <C.subTitleWrapper>
          제조사<C.subContent> 현대</C.subContent>
        </C.subTitleWrapper>
        <C.subTitleWrapper>
          모델 <C.subContent>아반떼</C.subContent>
        </C.subTitleWrapper>
        <C.buttonWrapper>
          <B.GraySmallButton>아니에요</B.GraySmallButton>
          <B.BlueSmallButton>맞아요</B.BlueSmallButton>
        </C.buttonWrapper>
      </C.popWrapper>
    </>
  );
}

export default CarRegisterPage;
