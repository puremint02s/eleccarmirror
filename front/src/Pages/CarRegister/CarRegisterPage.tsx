import styled from "styled-components";

import { useCallback, useState, useRef, useEffect } from "react";
import uploadImg from "assets/img/upload.png";
import CarConfirmPopup from "components/CarRegister/CarConfirmPopup";
import Header from "components/common/Header";
import TextBubbleBox from "components/CarRegister/TextBubbleBox";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import * as ImageUploadApi from "apis/ImageUpload";
import * as UserApi from "apis/UserApi";

function CarRegisterPage() {
  const navigate = useNavigate();
  const user = useQuery("user", UserApi.currentUserGet)?.data?.data;
  console.log("user", user);
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
        <div>
          <TitleWrapper>
            {user?.carowned
              ? "간편하게 나의 차량 등록하기"
              : "디자인이 취향인 차량 등록하기"}
          </TitleWrapper>
          <SubTitleWrapper>
            현재 차량을 소지하고 계시지 않으시군요! 평소 멋있다고 생각했던
            차량의 이미지를 업로드해보세요 제조사와 차종을 분류해드립니다.
          </SubTitleWrapper>
        </div>
        <div>
          <ImageWrapper>
            <TextBubbleBox text="자동차의 전체 사진을 올려주세요!" />
            <ImageBox back={uploadImg} onClick={onUpload} />
          </ImageWrapper>

          <BlueLargeButton id="uploadDiv" onClick={onUpload}>
            이미지 업로드
          </BlueLargeButton>
        </div>
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
  font-weight: 600;
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
  font-size: 18px;
  font-weight: 400;
  height: 100px;
  text-align: center;
  color: #898989;
  box-sizing: border-box;
  @media screen and (max-width: 720px) {
    padding: 0px 30px;
    width: 100vw;
  }
  @media screen and (max-height: 719px) {
    padding-top: 0;
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
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  @media screen and (max-height: 719px) {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
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
  border-radius: 10px;
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
  @media screen and (max-height: 719px) {
    // padding: 50px 0;
    // height: 100vh;
    overflow: scroll;
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
  @media screen and (max-height: 719px) {
    flex-direction: row;
    padding: 0;
    margin: 0;
    & > div {
      width: 50vw;
      padding: 10px;
      padding-top: 30px;
    }
    justify-content: center;
  }
`;

export default CarRegisterPage;
