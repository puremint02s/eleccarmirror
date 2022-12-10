import styled from "styled-components/macro";
interface propInterface {
  text: string;
}

const TextBubbleBox = ({ text }: propInterface) => {
  return (
    <>
      <BubbleBody>{text}</BubbleBody>
      <BubbleTail></BubbleTail>
    </>
  );
};

const BubbleBody = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-bottom: 1px;
  font-size: 11px;
  color: #907b53;
  width: 269.02px;
  height: 43px;
  line-height: 43px;
  background: #ffeab3;
  border-radius: 5px;
`;
const BubbleTail = styled.div`
  margin: 0 auto;
  width: 0;
  height: 0;
  border-bottom: 11.47px solid transparent;
  border-top: 11.47px solid transparent;
  border-left: 14.17px solid #ffeab3;
  border-right: 14.17px solid transparent;
  transform: rotate(90deg);
`;

export default TextBubbleBox;
