import {
  LogoWrapper,
  FindButtonWrapper,
  BlueButton,
  GreyButton,
} from "../../style/LoginFormStyle";

function FindEmailPwdPage() {
  return (
    <FindButtonWrapper>
      <LogoWrapper>
        <a href="/">
          <img
            style={{ width: 200 }}
            src="img/MyElecCar logo.png"
            alt="서비스 로고"
          />
        </a>
      </LogoWrapper>
      <a href="/find/email">
        <GreyButton>이메일 찾기</GreyButton>
      </a>
      <a href="find/pwd">
        <GreyButton>비밀번호 찾기</GreyButton>
      </a>
      <a href="/login">
        <BlueButton>로그인하러 가기</BlueButton>
      </a>
    </FindButtonWrapper>
  );
}

export default FindEmailPwdPage;
