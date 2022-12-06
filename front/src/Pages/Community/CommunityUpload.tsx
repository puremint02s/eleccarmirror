import React, { useRef, useState } from "react";
import Header from "components/common/Header";
import Main from "components/common/Main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Title = styled.div`
  border-bottom: 1px solid #9e9e9e;
  padding-top: 150px;
  h2 {
    height: 60px;
    line-height: 50px;
  }
`;

const UploadContent = styled.form`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  div {
    width: 90%;
    height: 58px;

    &.contentArea {
      height: auto;
    }

    input {
      width: 100%;
      height: 100%;
      display: block;
      text-indent: 2%;
      border: 1px solid #303030;
      outline: none;
    }

    textarea {
      padding: 2%;
      width: 96%;
      height: 223px;
      border: 1px solid #303030;
      outline: none;
    }

    span {
      display: block;
      color: #ff4f18;
      padding-top: 10px;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 40px 0;

  button {
    width: 173px;
    height: 52px;
    cursor: pointer;

    & + button {
      margin-left: 20px;
    }

    &:last-child {
      background-color: #0a84ff;
      color: #fff;
    }
  }
`;

const CommunityUpload = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleWarn, setTitleWarn] = useState("");
  const [contentWarn, setContentWarn] = useState("");
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
  const uploadContent = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    uploadData = {
      title,
      content,
    };
    navigate(`/community`);
  };
  return (
    <>
      <Header />
      <Main width="950px">
        <Title>
          <h2>커뮤니티 글쓰기</h2>
        </Title>
        <UploadContent onSubmit={uploadContent}>
          <Content>
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
          </Content>
          <Content>
            <p>내용</p>
            <div className="contentArea">
              <textarea
                placeholder="내용을 입력해주세요"
                ref={contentRef}
                onChange={e => {
                  setContent(e.target.value);
                }}
              ></textarea>
              <span>{contentWarn}</span>
            </div>
          </Content>
          <ButtonWrap>
            <button type="button" onClick={toPreviousPage}>
              취소하기
            </button>
            <button>등록하기</button>
          </ButtonWrap>
        </UploadContent>
      </Main>
    </>
  );
};

export default CommunityUpload;
