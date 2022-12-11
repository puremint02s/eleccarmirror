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

  @media screen and (max-width: 768px) {
    min-width: auto;
    padding: 0 4%;
  }
`;

export default Main;
