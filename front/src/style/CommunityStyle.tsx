import styled from "styled-components";

export const CommunityWrap = styled.div`
  padding-top: 130px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SearchBar = styled.div`
  border: 1px solid #c5c5c5;
  width: 190px;
  height: 27px;
  margin-bottom: 10px;

  form {
    width: 100%;
    height: 100%;

    fieldset {
      display: flex;
      justify-content: space-between;
      height: 100%;
      legend {
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
      }
      input {
        text-indent: 10px;
      }
      button {
        background-color: #303030;
        color: #fff;
        border: none;
        width: 45px;
        cursor: pointer;
      }
    }
  }
`;

export const CommunityContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const MyInfo = styled.div`
  width: 300px;
  height: auto;
  border-top: 2px solid #303030;

  .myInfo-user {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;

    & > p {
      width: 50%;

      .username {
        color: #0a84ff;
      }
    }

    & > span {
      display: inline-block;
      background-color: #eaeaea;
      border-radius: 20px;
      padding: 5px 10px;
      font-size: 14px;
    }
  }

  .myInfo-info {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #e0e0e0;
    ul {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-around;
      li {
        width: 30%;
        & + li {
          border-left: 1px solid #eaeaea;
        }

        span {
          display: block;
          text-align: center;
          font-size: 8px;
        }

        p {
          text-align: center;
          font-size: 14px;
          padding-top: 10px;
        }
      }
    }
  }

  .myInfo-write {
    width: 100%;
    height: auto;
    padding-bottom: 20px;
    border-bottom: 5px solid #eaeaea;
    .myInfo-write__count {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        display: flex;
        justify-content: center;
        p {
          padding-left: 10px;
        }
      }
    }

    button {
      /* &:hover {
        background-color: hover 색상 정하기 ;
      } */
    }
  }
`;

export const BoardWrap = styled.div`
  width: calc(100% - 280px);
  margin-left: 20px;
  border-top: 2px solid #303030;

  table {
    width: 100%;
    border-collapse: collapse;
    border-bottom: 5px solid #eaeaea;
    margin-bottom: 60px;

    thead {
      height: 45px;
      border-bottom: 5px solid #eaeaea;
      tr {
        th {
          &:first-child {
            width: 80%;
          }
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #e8e8e8;
        height: 48px;
        td {
          text-align: center;

          &:first-child {
            text-align: left;
          }
        }
      }
    }
  }
`;

export const UploadButton = styled.button`
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  background-color: #0a84ff;
  border: none;
  color: #fff;
  cursor: pointer;
`;
