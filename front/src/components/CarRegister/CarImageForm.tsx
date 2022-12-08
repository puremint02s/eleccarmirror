import { useCallback, useState, useRef, useEffect } from "react";
import * as C from "style/CarRegisterStyle";
import * as B from "components/common/Button";
import axios from "axios";
import { useQuery } from "react-query";
import DownSrc from "assets/img/download.png";
import CarConfirmPopup from "components/CarRegister/CarConfirmPopup";

const CarImageForm = () => {
  const [confirmPopUpOpen, setConfirmPopUpOpen] = useState(false);
  const popUpOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setConfirmPopUpOpen(true);
  };
  const BASE_URL = "http://localhost:4003";
  const imageInput = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState<Blob>();
  const [uploadedImg, setUploadedImg] = useState({
    filename: "",
    filePath: "",
  });
  const [fileImage, setFileImage] = useState("");

  const onClickImageUpload = useCallback(() => {
    imageInput?.current?.click();
  }, [imageInput]);

  const fileAdd = () => {
    const file = document.getElementById("fileAdd");
    file?.click();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (!e || (!e.target && e.target.files && !e.target.files[0])) return;
    e.target.files && setContent(e.target.files[0]);
    e.target.files && setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    content && formData.append("image", content);
    fileImage &&
      axios
        .post(`${BASE_URL}/images`, formData)
        .then(res => {
          const { filename } = res.data;
          console.log(filename);
          setUploadedImg({
            filename,
            filePath: `${BASE_URL}/uploads/${filename}`,
          });
          alert("The file is successfully uploaded");
        })
        .catch(err => {
          console.error(err);
        });
    fileImage && setConfirmPopUpOpen(true);
  };

  return (
    <>
      {confirmPopUpOpen && (
        <CarConfirmPopup
          setConfirmPopUpOpen={setConfirmPopUpOpen}
          fileImage={fileImage}
        />
      )}
      {fileImage ? (
        <C.imageBox back={fileImage} active={true} />
      ) : (
        <C.imageBox back={DownSrc} />
      )}
      <input
        type="file"
        name="file"
        id="fileAdd"
        accept="image/*"
        ref={imageInput}
        onChange={onChange}
        hidden
      />
      <C.centerWrapperTop>
        <B.BlueBorderLargeButton id="uploadDiv" onClick={onClickImageUpload}>
          이미지 업로드
        </B.BlueBorderLargeButton>
        <C.DeleteButton onClick={() => deleteFileImage()}>
          {" "}
          삭제{" "}
        </C.DeleteButton>
      </C.centerWrapperTop>

      <form onSubmit={onSubmit}>
        <C.centerWrapper>
          <B.BlueLargeButton type="submit">등록하기</B.BlueLargeButton>
        </C.centerWrapper>
      </form>
    </>
  );
};

export default CarImageForm;
