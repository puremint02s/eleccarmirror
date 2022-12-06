import { useCallback, useState, useRef, useEffect } from "react";
import * as C from "style/CarRegisterStyle";
import * as B from "components/common/Button";
import axios from "axios";

const CarImageForm = () => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState<Blob>();
  const [uploadedImg, setUploadedImg] = useState({
    filename: "",
  });

  const fileAdd = () => {
    const file = document.getElementById("fileAdd");
    file?.click();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (!e || (!e.target && e.target.files && !e.target.files[0])) return;
    e.target.files && setContent(e.target.files[0]);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    content && formData.append("image", content);
    axios
      .post("http://localhost:4003/images", formData)
      .then(res => {
        const { filename } = res.data;
        console.log(filename);
        setUploadedImg({ filename });
        alert("The file is successfully uploaded");
      })
      .catch(err => {
        console.error(err);
      });
  };

  //버튼을 눌러서 사진 업로드창을 띄울수 있다
  // const onClickImageUpload = useCallback(() => {
  //   imageInput.current.click();
  // }, [imageInput]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <C.centerWrapperTop>
          <B.BlueBorderLargeButton id="uploadDiv">
            <input
              type="file"
              name="file"
              id="fileAdd"
              accept="image/*"
              ref={imageInput}
              onChange={onChange}
            />
          </B.BlueBorderLargeButton>
        </C.centerWrapperTop>
        <C.centerWrapper>
          <B.BlueLargeButton type="submit">등록하기</B.BlueLargeButton>
        </C.centerWrapper>
      </form>
    </>
  );
};

export default CarImageForm;
