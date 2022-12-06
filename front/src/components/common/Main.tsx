import styled from "styled-components";

type Props = {
  width: string;
};

const Main = styled.main<Props>`
  /* max-width:1850px; */
  max-width: ${props => props.width};
  min-width: 1550px;
  height: auto;
  margin: 0 auto;
`;

export default Main;
