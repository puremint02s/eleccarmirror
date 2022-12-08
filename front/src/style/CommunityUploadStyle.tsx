import styled from "styled-components";

export const Title = styled.div`
  border-bottom: 1px solid #9e9e9e;
  padding-top: 150px;
  h2 {
    height: 60px;
    line-height: 50px;
  }
`;

export const UploadContent = styled.form`
  width: 100%;
  height: auto;
`;

export const Content = styled.div`
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

export const ButtonWrap = styled.div`
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
