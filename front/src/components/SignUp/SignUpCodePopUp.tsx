import styled from "styled-components";

interface propsTypes {
  setSignUpCodePopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpCodePopUp = ({ setSignUpCodePopUpOpen }: propsTypes) => {
  const TansitionBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0px;
    left: 0px;
  `;
  const PopUp = styled.div`
    width: 600px;
    height: 80%;
    background-color: white;
    transform: translate(-50%, -50%);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
  `;
  const Div = styled.div<{ margin: string }>`
    margin: ${({ margin }) => margin};
  `;
  const Text = styled.span<{ color: string; margin: string }>`
    margin: ${({ margin }) => margin};
    color: ${({ color }) => color};
  `;
  const Img = styled.img<{ width: string; height: string; margin: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
  `;
  const Input = styled.input`
    width: 320px;
    height: 40px;
    background-color: #f6f6f6;
    padding-left: 10px;
    box-sizing: border-box;
  `;
  const Button = styled.button`
    width: 320px;
    height: 40px;
    background-color: #0a84ff;
    color: white;
  `;
  return (
    <>
      <TansitionBackground
        onClick={() => {
          setSignUpCodePopUpOpen(false);
        }}
      >
        <PopUp onClick={e => e.stopPropagation()}>
          <Img
            width="180px"
            height="auto"
            margin="0 0 70px 0"
            src="img/MyElecCar logo.png"
            alt="서비스 로고"
          />
          <Img
            width="180px"
            height="auto"
            margin="0px"
            src="img/email_img.png"
            alt="서비스 로고"
          />
          <Text margin="30px" color="black">
            인증메일을 확인해주세요 :)
          </Text>
          <Input
            id="nickname"
            type="text"
            name="nickname"
            placeholder="회원가입 인증코드를 입력해주세요"
          />
          <Button onClick={() => alert("btn clicked")} type="submit">
            코드확인
          </Button>
          <Div margin="50px">
            <Text margin="10px" color="black">
              인증메일이 오지 않았나요?
            </Text>
            <Text margin="10px" color="blue">
              인증메일 재전송
            </Text>
          </Div>
        </PopUp>
      </TansitionBackground>
    </>
  );
};
export default SignUpCodePopUp;
