import styled from "styled-components/macro";

export const CommunityLoadWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const CommunityContent = styled.div`
  width: calc(100% - 280px);
  margin-left: 20px;
  border-top: 2px solid #303030;
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
    }

    h2 {
      font-size: 30px;
    }
  }
`;

export const Content = styled.div`
  padding-top: 20px;
  height: 500px;
`;

export const Hashtags = styled.div`
  padding-bottom: 10px;
  span {
    background-color: #ebebeb;
    padding: 5px;
    display: inline-block;
    border-radius: 7px;
    color: #585858;

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

    & > p {
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
