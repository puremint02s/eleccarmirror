import styled from "styled-components";
import DownSrc from "assets/img/download.png";

export const titleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
  font-weight: 400;
`;

export const subTitleWrapper = styled.div`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1px;
  font-size: 15px;
  color: #898989;
  font-weight: 400;
`;
export const subContent = styled.span`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1px;
  font-size: 15px;
  color: #333;
  font-weight: 400;
`;

export const textWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  padding-bottom: 1px;
  font-size: 11px;
  color: #907b53;
  width: 269.02px;
  height: 43px;
  line-height: 43px;
  background: #ffeab3;
  border-radius: 5px;
`;

export const textBox = styled.div`
  margin: 0 auto;
  width: 0;
  height: 0;
  border-bottom: 11.47px solid transparent;
  border-top: 11.47px solid transparent;
  border-left: 14.17px solid #ffeab3;
  border-right: 14.17px solid transparent;
  transform: rotate(90deg);
`;

export const imageBox = styled.div`
  width: 305.66px;
  height: 284.92px;
  background: #ffffff;
  border-radius: 28px;
  margin: 0 auto;
  margin-top: 1rem;
  background-image: url(${DownSrc});
  background-repeat: no-repeat;
  background-position: center center;
`;

export const centerWrapperTop = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

export const centerWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const buttonWrapper = styled.div`
  text-align: center;
  margin-top: 87px;
  margin-bottom: 84px;
`;

export const imgWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  margin-top: 60px;
  margin-bottom: 35px;
`;

export const popDim = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0px;
  left: 0px;
`;

export const popWrapper = styled.div`
  width: 600px;
  transform: translate(-50%, -50%);
  // -webkit-transform: translate(-50%, -50%);
  // -moz-transform: translate(-50%, -50%);
  // -ms-transform: translate(-50%, -50%);
  // -o-transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
`;
