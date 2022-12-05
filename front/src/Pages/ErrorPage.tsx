import styled from "styled-components";

function ErrorPage() {
  return <ErrorWrapper>잘못된 주소입니다.</ErrorWrapper>;
}

export default ErrorPage;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
