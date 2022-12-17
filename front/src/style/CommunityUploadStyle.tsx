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

    input {
      width: 100%;
      height: 100%;
      display: block;
      text-indent: 2%;
      border: 1px solid #303030;
      outline: none;
      font-size: 16px;
    }

    span {
      display: block;
      color: #ff4f18;
      padding-top: 10px;
    }

    & > div {
      width: 100%;
      height: auto;
      textarea {
        padding: 2%;
        width: 96%;
        height: 223px;
        border: 1px solid #303030;
        outline: none;
        resize: none;
      }

      &:last-child {
        .imgBox {
          /* width: 200px; */
          /* height: 200px; */
          height: auto;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 30px;
          img {
            width: 200px;
            /* border: 1px solid #aaa; */
          }
        }
        & > input {
          border: none;
          opacity: 0;
          width: 0;
          height: 0;
          overflow: hidden;
        }

        button {
          padding: 10px 20px;
          border-radius: 9px;
          cursor: pointer;
        }
      }
    }

    &.contentArea {
      height: auto;

      /* & > div:first-child {
        margin-bottom: 20px;
      } */

      .textArea_wrap {
        border: 1px solid #303030;
        textarea {
          line-height: 22px;
          font-size: 16px;
          border: none;
        }

        .textlength {
          text-align: right;
          padding: 18px;
        }
      }
    }
  }
`;

export const HashTags = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  div {
    width: 90%;
    height: auto;

    &.contentArea {
      height: auto;
    }

    input {
      width: 100%;
      height: 40px;
      display: block;
      text-indent: 2%;
      border: 1px solid #303030;
      outline: none;
    }
  }
  span {
    display: block;
    /* color: #ff4f18; */
    padding-top: 10px;
    font-size: 14px;
    color: #9c614f;
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
