import React, { useState, useEffect } from "react";
import * as C from "../../style/CarConfirmStyle";
import * as B from "components/common/Button";
import CarImageForm from "components/CarRegister/CarImageForm";
import Loading from "components/Loading/Loading";

interface propsTypes {
  setConfirmPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fileImage: string;
}

function CarRegisterPage({ setConfirmPopUpOpen, fileImage }: propsTypes) {
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReady(false);
    }, 1000);
  }, []);
  return ready ? (
    <Loading />
  ) : (
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
