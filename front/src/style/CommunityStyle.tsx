import styled from "styled-components/macro";

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

  @media screen and (max-width: 1370px) {
    width: 100%;
    height: 35px;
    overflow: hidden;
  }

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
        outline: none;
        width: 70%;
        @media screen and (max-width: 1370px) {
          width: 100%;
          height: 100%;
        }
      }
      button {
        background-color: #303030;
        color: #fff;
        border: none;
        /* width: 45px; */
        width: 30%;
        cursor: pointer;

        @media screen and (max-width: 1370px) {
          width: 80px;
        }
      }
    }
  }
`;

export const CommunityContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: unset;

  @media screen and (max-width: 1370px) {
    flex-direction: column;
  }
`;

export const BoardWrap = styled.div`
  width: calc(100% - 280px);
  margin-left: 20px;
  border-top: 2px solid #303030;
  @media screen and (max-width: 1370px) {
    width: 100%;
    margin-left: 0px;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    border-bottom: 5px solid #eaeaea;
    margin-bottom: 60px;
    display: table;

    .thead {
      height: 45px;
      line-height: 45px;
      border-bottom: 5px solid #eaeaea;
      display: table-row-group;
      .tr {
        display: table-row;
        p {
          display: table-cell;
          text-align: center;

          @media screen and (max-width: 1370px) {
            font-size: 14px;
          }
          &:first-child {
            width: 80%;

            @media screen and (max-width: 1370px) {
              width: 70%;
            }

            @media screen and (max-width: 720px) {
              width: 50%;
            }
          }
        }
      }
    }

    .tbody {
      display: table-row-group;
      .tr {
        display: table-row;
        border-bottom: 1px solid #e8e8e8;
        height: 48px;
        .td {
          display: table-cell;
          text-align: center;

          &.nickname {
            p {
              margin: 0 auto;
              max-width: 130px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;

              @media screen and (max-width: 1370px) {
                max-width: 50px;
              }
            }
          }

          @media screen and (max-width: 1370px) {
            font-size: 14px;
          }

          &:first-child {
            text-align: left;
            display: flex;
          }

          button {
            max-width: 800px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background-color: transparent;
            font-size: 16px;
            margin-right: 20px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              color: #0a84ff;
            }

            @media screen and (max-width: 1370px) {
              max-width: 220px;
            }
          }

          & > p {
            & > span {
              display: flex;
              width: 29px;
              justify-content: space-between;
              align-items: center;
              color: #888888;
              i {
                margin-top: 3px;
                color: #868e96;
              }
            }
          }
        }
      }
    }
  }
`;
