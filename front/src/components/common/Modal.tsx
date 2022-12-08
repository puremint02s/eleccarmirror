import styled from "styled-components";

function Modal(props: any): any {
  function closeModal(): void {
    props.closeModal();
  }
  return (
    <ModalOutside onClick={closeModal}>
      <ModalBody onClick={e => e.stopPropagation()}>
        <ModalCloseBtn onClick={closeModal}>✖</ModalCloseBtn>
        {props.children}
      </ModalBody>
    </ModalOutside>
  );
}

export default Modal;

const ModalOutside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  position: absolute;
  width: 900px;
  height: 600px;
  padding: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  color: black;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;
