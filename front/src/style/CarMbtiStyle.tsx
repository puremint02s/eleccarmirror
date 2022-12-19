import styled from "styled-components";

export const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
  font-weight: 500;
`;

export const SubTitleWrapper = styled.div`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1px;
  font-size: 13px;
  color: #898989;
`;

export const TestStartButtonWrapper = styled.div`
  text-align: center;
`;

export const TestStartButton = styled.button`
  padding: 3rem;
  font-size: 16px;
  margin-top: 3rem;
  cursor: pointer;
  border-radius: 28px;
  background-color: #f6f6f6;
  border: none;
`;

export const TestContentsWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

export const TestImageWrapper = styled.div`
  text-align: center;
  padding: 3rem;
  margin-top: 2rem;
`;

export const TestButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.5rem;
`;

export const TestUpButton = styled.button`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 15px;
  width: 320px;
  cursor: pointer;
  border-radius: 28px;
  border: none;
`;

export const TestDownButton = styled.button`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 15px;
  width: 320px;
  cursor: pointer;
  color: white;
  background-color: #0a84ff;
  margin-top: 1rem;
  border-radius: 28px;
  border: none;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ResultImageWrapper = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const ResultImage = styled.img`
  width: 150px;
`;

export const MbtiTitleWrapper = styled.div`
  text-align: center;
  padding-bottom: 1px;
  font-size: 25px;
`;

export const MbtiDivideLine = styled.p`
  color: #0a84ff;
  font-weight: bold;
`;

export const TestRetryButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #898989;
  font-size: 14px;
  text-align: center;
  width: 130px;
  cursor: pointer;
  background-color: #f6f6f6;
  margin-top: 1rem;
  display: inline-block;
  margin-right: 1rem;
`;

export const NextTestButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 14px;
  text-align: center;
  width: 130px;
  cursor: pointer;
  color: white;
  background-color: #0a84ff;
  margin-top: 1rem;
  display: inline-block;
`;

export const ResultButtonWrapper = styled.div`
  text-align: center;
`;

export const ResultListWrapper = styled.ul`
  text-align: center;
  margin-top: 1rem;
  font-size: 15px;
  color: #898989;
`;

export const ResultListComponentWrapper = styled.li`
  text-align: center;
  margin: 1rem;
  background-color: #f6f6f6;
  width: 130px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 25px;
  display: inline-block;
  font-size: 14px;
`;

export const ResultMbtiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const StatusBar = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 0.7rem;
  background-color: #d9d9d9;
  display: flex;
  position: fixed;
  bottom: 0;
`;

export const Status = styled.div`
  height: 0.7rem;
  background-color: #0a84ff;
  display: flex;
  position: fixed;
  bottom: 0;
`;
