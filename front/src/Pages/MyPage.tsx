import Header from "components/common/Header";
import Sidebar from "components/MyPage/Sidebar";
import Pagination from "components/common/Pagination";
import styled from "styled-components";

const dummyMyCarData = {
  model: "아반떼",
  brand: "현대",
  MPG: 10,
};

const dummyFillUpData = {
  date: "2022-04-10",
  gas: "휘발유",
  volume: 10,
  distance: 15000,
};

function MyPage() {
  return (
    <>
      <Header />
      <TitleWrapper>마이 페이지</TitleWrapper>
      <MyPageWrapper>
        <Sidebar />
        <MyPageContentWrapper>
          <div style={{ paddingTop: 100 }}>
            <MyPageContentTitle>
              나의 차량 정보
              <ModifyCarInfoButton>수정</ModifyCarInfoButton>
            </MyPageContentTitle>
            <MyPageContent>
              <ul>
                <li>
                  <span>차종</span>
                  <p>{dummyMyCarData.model}</p>
                </li>
                <li>
                  <span>제조사</span>
                  <p>{dummyMyCarData.brand}</p>
                </li>
                <li>
                  <span>평균 연비</span>
                  <p>{dummyMyCarData.MPG}km/L</p>
                </li>
              </ul>
            </MyPageContent>
          </div>
          <div style={{ paddingTop: 100 }}>
            <MyPageContentTitle>
              이전 주유 기록 (최근 3개월)
              <AddRefuelButton>+ 주유내역</AddRefuelButton>
            </MyPageContentTitle>
            <RefuelWrap>
              <table>
                <thead>
                  <tr>
                    <th>주유 날짜</th>
                    <th>유종</th>
                    <th>주유량(L)</th>
                    <th>누적 주행 거리(km)</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{dummyFillUpData.date}</td>
                    <td>{dummyFillUpData.gas}</td>
                    <td>{dummyFillUpData.volume}L</td>
                    <td>{dummyFillUpData.distance}km</td>
                    <td>
                      <button>수정</button>
                      <button>삭제</button>
                    </td>
                  </tr>
                  <tr>
                    <td>{dummyFillUpData.date}</td>
                    <td>{dummyFillUpData.gas}</td>
                    <td>{dummyFillUpData.volume}L</td>
                    <td>{dummyFillUpData.distance}km</td>
                    <td>
                      <button>수정</button>
                      <button>삭제</button>
                    </td>
                  </tr>
                  <tr>
                    <td>{dummyFillUpData.date}</td>
                    <td>{dummyFillUpData.gas}</td>
                    <td>{dummyFillUpData.volume}L</td>
                    <td>{dummyFillUpData.distance}km</td>
                    <td>
                      <button>수정</button>
                      <button>삭제</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Pagination />
            </RefuelWrap>
          </div>
        </MyPageContentWrapper>
      </MyPageWrapper>
    </>
  );
}

export default MyPage;

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
  font-weight: 500;
`;

const MyPageWrapper = styled.div`
  display: flex;
`;

const MyPageContentWrapper = styled.div`
  text-align: center;
  padding-left: 3rem;
  display: inline;
  flex-direction: column;
  justify-content: center;
`;

const MyPageContentTitle = styled.p`
  text-align: left;
  padding-bottom: 15px;
  font-weight: 500;
`;

const ModifyCarInfoButton = styled.button`
  float: right;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  border-radius: 28px;
  border: none;
  font-size: 12px;
  color: #636363;
`;

const MyPageContent = styled.div`
  width: 50rem;
  height: auto;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 2px solid #e0e0e0;
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
        font-size: 13px;
        color: #ababab;
      }

      p {
        text-align: center;
        font-size: 14px;
        padding-top: 15px;
        font-weight: 500;
      }
    }
  }
`;

const AddRefuelButton = styled.button`
  float: right;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  border-radius: 28px;
  border: none;
  font-size: 12px;
  color: #636363;
`;

const RefuelWrap = styled.div`
  width: 50rem;
  border-top: 2px solid #e0e0e0;

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 60px;

    thead {
      height: 45px;
      border-bottom: 1px solid #eaeaea;
      th {
        font-size: 14px;
        padding-top: 18px;
        font-weight: 600;
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #e8e8e8;
        height: 48px;
        td {
          text-align: center;
          font-size: 14px;
          padding-top: 14px;
          color: #696969;
        }
      }
    }
  }
`;