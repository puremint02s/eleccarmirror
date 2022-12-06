import { Link } from "react-router-dom";
import {
  LogoWrapper,
  FindButtonWrapper,
  BlueButton,
  GreyButton,
} from "../../style/LoginFormStyle";
import LogoImg from "assets/img/MyElecCar logo.png";

function FindEmailPwdPage() {
  return (
    <FindButtonWrapper>
      <LogoWrapper>
        <Link to="/">
          <img style={{ width: 200 }} src={LogoImg} alt="서비스 로고" />
        </Link>
      </LogoWrapper>
      <Link to="/find/email">
        <GreyButton>이메일 찾기</GreyButton>
      </Link>
      <Link to="/find/pwd">
        <GreyButton>비밀번호 찾기</GreyButton>
      </Link>
      <Link to="/login">
        <BlueButton>로그인하러 가기</BlueButton>
      </Link>
    </FindButtonWrapper>
  );
}

export default FindEmailPwdPage;
