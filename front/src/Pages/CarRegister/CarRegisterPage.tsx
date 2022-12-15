import styled from "styled-components";

import { useCallback, useState, useRef, useEffect } from "react";
import axios from "axios";
import uploadImg from "assets/img/upload.png";
import CarConfirmPopup from "components/CarRegister/CarConfirmPopup";
import Header from "components/common/Header";
import TextBubbleBox from "components/CarRegister/TextBubbleBox";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import * as ImageUploadApi from "apis/ImageUpload";
interface carData {
  filename: string;
  prediction: Array<number>;
}

function CarRegisterPage() {
  const navigate = useNavigate();

  const BACK_SERVER_URL = process.env.REACT_APP_BACK_SERVER_URL;
  const imageInput = useRef<HTMLInputElement>(null);

  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const { mutate, isLoading, data } = useMutation("carData", (data: any) =>
    ImageUploadApi.postImage(data),
  );

  const onUpload = useCallback(() => {
    imageInput?.current?.click();
  }, [imageInput]);

  const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPopUpOpen(true);

    const imageFormData = new FormData();
    Array.from(e.target.files).forEach(imageFile =>
      imageFormData.append("image", imageFile),
    );
    mutate(imageFormData);
    e.target.value = "";
  };

  return (
    <CarRegisterPageWrapper>
      <HeaderWrapper>
        <Header></Header>
      </HeaderWrapper>
      <MainArea>
        <TitleWrapper>간편하게 나의 차량 등록하기</TitleWrapper>
        <SubTitleWrapper>
          차량 이미지를 업로드해보세요 제조사와 차종을 분류해드립니다.
        </SubTitleWrapper>
        {/* 이거 컴포넌트로 묶기 */}

        <ImageWrapper>
          <TextBubbleBox text="자동차의 전체 사진을 올려주세요!" />
          <ImageBox back={uploadImg} onClick={onUpload} />
        </ImageWrapper>

        <BlueLargeButton id="uploadDiv" onClick={onUpload}>
          이미지 업로드
        </BlueLargeButton>
      </MainArea>
      {isPopUpOpen && (
        <CarConfirmPopup
          setPopUpOpen={setPopUpOpen}
          fileName={data?.filename}
          predictionList={data?.prediction}
        />
      )}

      <input
        type="file"
        name="file"
        id="fileAdd"
        accept="image/*"
        ref={imageInput}
        onChange={onChangeImage}
        hidden
      />
    </CarRegisterPageWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  height: 40px;
  box-sizing: border-box;
  @media screen and (max-width: 720px) {
    padding: 0 30px;
    width: 100vw;
  }
`;

const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  height: 30px;
  color: #898989;
  box-sizing: border-box;
  @media screen and (max-width: 720px) {
    padding: 0px 30px;
    width: 100vw;
  }
`;

interface ImageStyledProps {
  back: string;
}
const ImageBox = styled.div<ImageStyledProps>`
  width: 305.66px;
  height: 284.92px;
  background: #f6f6f6;
  border-radius: 28px;
  margin: 0 auto;
  margin-top: 1rem;
  background-image: url(${props => `${props.back}`});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto;
`;

const BlueLargeButton = styled.button`
  width: 394.83px;
  height: 58.12px;
  background: #0a84ff;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
  @media screen and (max-width: 720px) {
    width: 90vw;
  }
`;
const ImageWrapper = styled.div`
  margin: 3rem 0;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  top: 0;
`;
const CarRegisterPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  @media screen and (max-width: 720px) {
    width: 100vw;
  }
`;
const MainArea = styled.div`
  width: 100vw;
  // height: calc(100vh - 60px);
  height: 100vh;
  padding-top: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default CarRegisterPage;
