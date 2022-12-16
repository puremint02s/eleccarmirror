import React, { useRef, useState } from "react";
import axios from "axios";
import Header from "components/common/Header";
import Main from "components/common/Main";
import { useNavigate } from "react-router-dom";
import * as uploadStyle from "style/CommunityUploadStyle";
import * as CommunityApi from "apis/CommunityApi";
import * as ImageUploadApi from "apis/ImageUpload";

const CommunityUpload = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const hashTagsRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [titleWarn, setTitleWarn] = useState("");
  const [contentWarn, setContentWarn] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [imageContent, setImageContent] = useState<Blob | string>("");
  const [uploadImages, setUploadImages] = useState<{
    file: File;
    thumbnail: string;
    type: string;
  }>();

  const BACK_SERVER_URL = process.env.REACT_APP_BACK_SERVER_URL;

  const toPreviousPage = () => {
    navigate(`/community`);
  };

  const validation = () => {
    if (!titleRef.current || !contentRef.current) {
      return;
    }
    if (titleRef.current?.value == "" && contentRef.current?.value == "") {
      titleRef.current?.focus();
      titleRef.current.style.borderColor = "#FF4F18";
      contentRef.current.style.borderColor = "#FF4F18";
      setTitleWarn("제목을 입력해주세요");
      setContentWarn("내용을 입력해주세요");
    } else if (titleRef.current?.value == "") {
      titleRef.current?.focus();
      titleRef.current.style.borderColor = "#FF4F18";
      contentRef.current.style.borderColor = "#303030";
      setTitleWarn("제목을 입력해주세요");
      setContentWarn("");
    } else if (contentRef.current?.value == "") {
      contentRef.current?.focus();
      titleRef.current.style.borderColor = "#303030";
      contentRef.current.style.borderColor = "#FF4F18";
      setTitleWarn("");
      setContentWarn("내용을 입력해주세요");
    } else {
      titleRef.current.style.borderColor = "#303030";
      contentRef.current.style.borderColor = "#303030";
      setTitleWarn("");
      setContentWarn("");

      return true;
    }
  };
  let uploadData;
  const uploadContent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validation()) {
      return;
    }

    const formData = new FormData();

    formData.append("image", imageContent);

    uploadData = {
      title,
      content,
      hashtags: hashTagsRef?.current?.value,
      filename: formData,
    };
    try {
      const res = await CommunityApi.uploadCommunity(uploadData);
      console.log("res", res);
    } catch (err) {
      console.log("err=>", err);
    }

    // const formData = new FormData();
    // formData.append("image", imageContent);

    // try {
    //   const res = await ImageUploadApi.postCommunityImage(formData);
    //   console.log("img res", res);
    // } catch (err) {
    //   console.log("파일 안올라갔어요", err);
    // }

    // axios
    //   .post(`${BACK_SERVER_URL}/community/images`, formData)
    //   .then(res => {
    //     console.log("파일 올라갔니", res.data);
    //   })
    //   .catch(err => {
    //     console.log("file is not uploaded", err);
    //   });

    navigate(`/community`);
  };

  const checkTextLength = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // console.log("text lenght", e.currentTarget.value.length);
    const maxLength = 800;
    if (e.currentTarget.value.length <= maxLength) {
      setTextLength(e.currentTarget.value.length);
    } else {
      e.currentTarget.value = e.currentTarget.value.substring(0, maxLength);
    }
  };

  console.log("imageFile?.file.name", imageContent);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // console.log("e.target.files", e.target.files[0]);
      // setImageContent(e.target.files[0]);
      setImageContent(e.target.files[0].name);
      const url = URL.createObjectURL(e.target.files[0]);
      setUploadImages({
        file: e.target.files[0],
        thumbnail: url,
        type: e.target.files[0].type.slice(0, 5),
      });
    }
  };

  const clickFileInput = () => {
    fileInputRef.current?.click();
    // console.log("image click");
  };

  return (
    <>
      <Header />
      <Main width="950px">
        <uploadStyle.Title>
          <h2>커뮤니티 글쓰기</h2>
        </uploadStyle.Title>
        <uploadStyle.UploadContent onSubmit={uploadContent}>
          <uploadStyle.Content>
            <p>제목</p>
            <div>
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                ref={titleRef}
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
              <span>{titleWarn}</span>
            </div>
          </uploadStyle.Content>

          <uploadStyle.Content>
            <p>내용</p>
            <div className="contentArea">
              <div>
                <div className="textArea_wrap">
                  <textarea
                    placeholder="내용을 입력해주세요"
                    ref={contentRef}
                    onChange={e => {
                      setContent(e.target.value);
                    }}
                    onKeyUp={checkTextLength}
                  ></textarea>
                  <p className="textlength">{textLength}/800</p>
                </div>
                <div>
                  <p className="imgBox">
                    <img
                      src={uploadImages?.thumbnail}
                      alt={uploadImages?.thumbnail}
                      // onClick={clickFileInput}
                    />
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={uploadImage}
                  />
                  <button type="button" onClick={clickFileInput}>
                    파일 업로드
                  </button>
                </div>
              </div>
            </div>
          </uploadStyle.Content>
          <uploadStyle.HashTags>
            <p>관련검색어</p>
            <div className="contentArea">
              <input
                placeholder="내용을 입력해주세요"
                ref={hashTagsRef}
              ></input>
              <span className="hashtags-tip">
                콤마로 관련검색어를 나눠주세요
              </span>
            </div>
          </uploadStyle.HashTags>
          <uploadStyle.ButtonWrap>
            <button type="button" onClick={toPreviousPage}>
              취소하기
            </button>
            <button>등록하기</button>
          </uploadStyle.ButtonWrap>
        </uploadStyle.UploadContent>
      </Main>
    </>
  );
};

export default CommunityUpload;
