import styled from "styled-components/macro";

export const CommunityLoadWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: unset;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CommunityContent = styled.div`
  width: calc(100% - 280px);
  margin-left: 20px;
  border-top: 2px solid #303030;

  & > button {
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const Title = styled.div`
  line-height: 100px;
  border-bottom: 1px solid #cbcbcb;

  div {
    display: flex;
    justify-content: space-between;
    line-height: 50px;

    &:first-child {
      line-height: 70px;
      & > p {
        button {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            background-color: #d2e0ec;
          }
        }
      }
    }

    h2 {
      font-size: 30px;
    }

    & > input {
      width: 100%;
      border: 1px solid #aaa;
      padding: 20px 0;
      text-indent: 10px;
      font-size: 17px;
    }

    b {
      color: #7c7c7c;
    }
  }

  & > div:last-child {
    & > p:last-child {
      button {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;

        & + button {
          margin-left: 10px;
        }

        &:hover {
          background-color: #d2e0ec;
        }
      }
    }
  }
`;

export const Content = styled.div`
  padding-top: 20px;
  height: 500px;
  .contentArea {
    height: 80%;
    textarea {
      border-color: #aaa;
      resize: none;
      width: 98%;
      height: 98%;
      padding: 1%;
      font-size: 16px;
    }
  }
`;

export const Hashtags = styled.div`
  padding-bottom: 10px;
  display: flex;
  align-items: flex-start;
  & > p {
    padding-right: 20px;
  }
  .contentArea {
    display: flex;
    flex-direction: column;

    input {
      width: 400px;
      border: 1px solid #aaa;
      padding: 13px;
      font-size: 16px;
    }
    .hashtags-tip {
      background-color: transparent;
      font-size: 14px;
      color: #a14e35;
    }
  }
  span {
    background-color: #0a84ff;
    padding: 5px;
    display: inline-block;
    border-radius: 7px;
    color: #fff;

    & + span {
      margin-left: 5px;
    }
  }
`;

export const Reply = styled.div`
  border: 1px solid #cbcbcb;
  padding: 2%;
  & > div {
    border-top: 1px solid #cbcbcb;
    padding: 20px 0;

    &:first-child {
      border-top: none;
    }

    & > div {
      display: flex;
      & > p {
        padding-left: 20px;
        button {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            background-color: #d2e0ec;
          }
          & + button {
            margin-left: 10px;
          }
        }
      }
      & + p {
        padding-top: 10px;
      }
      &:first-child {
        font-weight: bold;
      }
    }
  }
`;

export const ReplyMySection = styled.div`
  border: 1px solid #cbcbcb !important;
  border-radius: 10px;
  padding: 2% !important;
  textarea {
    /* margin: 2%; */
    margin-top: 20px;
    width: 96%;
    height: 50px;
    border: 1px solid #303030;
    outline: none;
    border: none;
    resize: none;
    font-size: 16px;
    overflow-y: hidden;
  }

  .button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    button {
      width: 100px;
      height: 30px;
      cursor: pointer;
    }
  }
`;
