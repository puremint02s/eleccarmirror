import styled from "styled-components";
import { deleteRefuelRecord } from "apis/RefuelRecordApi";
import WarningIconImg from "assets/img/warning.png";

function DeleteRecord(_id: any) {
  const recordId = _id;

  const handleRefuelRecordDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const data = { _id: recordId };
      await deleteRefuelRecord(data);
      window.alert("주유내역이 정상적으로 삭제되었습니다.");
      window.location.replace("/mypage");
    } catch (e) {
      console.log(e);
      window.alert("주유내역 삭제에 실패하였습니다.");
      window.location.replace("/mypage");
    }
  };

  return (
    <>
      <DeleteIcon src={WarningIconImg} alt="삭제 경고 아이콘" />
      <DeleteDesc>
        삭제하려는 주유내역을 <br /> 다시 한 번 확인해주세요.
      </DeleteDesc>
      <DeleteRecordButton onClick={handleRefuelRecordDelete}>
        삭제하기
      </DeleteRecordButton>
    </>
  );
}

export default DeleteRecord;

const DeleteIcon = styled.img`
  width: 75px;
  height: 75px;
  padding-top: 10px;
`;

const DeleteDesc = styled.p`
  padding-top: 25px;
  padding-bottom: 7px;
  line-height: 1.4;
  font-size: 15px;
`;

const DeleteRecordButton = styled.button`
  font-size: 14px;
  text-align: center;
  width: 80px;
  height: 40px;
  cursor: pointer;
  color: white;
  background-color: #797979;
  margin-top: 7px;
`;
