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
