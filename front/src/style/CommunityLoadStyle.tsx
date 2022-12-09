import styled from "styled-components/macro";

export const CommunityLoadWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
`;

export const CommunityContent = styled.div`
  width: calc(100% - 280px);
  margin-left: 20px;
  border-top: 2px solid #303030;
`;

export const Title = styled.div`
  line-height: 100px;
  border-bottom: 1px solid #cbcbcb;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 30px;
  }
`;

export const Content = styled.div`
  padding-top: 20px;
  height: 500px;
`;

export const Hashtags = styled.div`
  display: inline-block;
  background-color: #ebebeb;
  padding: 5px;
  border-radius: 7px;
`;

export const Reply = styled.div`
  border: 1px solid #cbcbcb;
  padding: 2%;
`;

export const ReplyMySection = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 10px;
  padding: 2%;
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
