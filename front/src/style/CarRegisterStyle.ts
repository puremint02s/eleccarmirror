import styled, { css } from "styled-components";
import DownSrc from "assets/img/download.png";

export interface ImageStyledProps {
  back: string;
  active?: boolean;
}

export const titleWrapper = styled.div`
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 1px;
  font-size: 25px;
`;

export const subTitleWrapper = styled.div`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1px;
  font-size: 15px;
  color: #898989;
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

export const imageBox = styled.div<ImageStyledProps>`
  width: 305.66px;
  height: 284.92px;
  background: #f6f6f6;
  border-radius: 28px;
  margin: 0 auto;
  margin-top: 1rem;
  background-image: url(${props => `${props.back}`});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto;
  ${({ active }) =>
    active &&
    css`
      background-size: cover;
    `}
`;

export const centerWrapperTop = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  width: 394.83px;
`;

export const centerWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const BlueBorderLargeButton = styled.button`
  width: 70%;
  height: 58.12px;
  border: 2px solid #0a84ff;
  background: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #0a84ff;
  margin: 0 auto;
`;

export const DeleteButton = styled.button`
  width: 20%;
  height: 58.12px;
  border: 2px solid #0a84ff;
  background: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #0a84ff;
  margin: 0 auto;
`;
