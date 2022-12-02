import logo from "assets/img/MyElecCar logo.png";
import emailIcon from "assets/img/email_img.png";
import { useNavigate } from "react-router-dom";

interface propsTypes {
  setSignUpCodePopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpCodePopUp = ({ setSignUpCodePopUpOpen }: propsTypes) => {
  const navigate = useNavigate();
  const handleClickMain = () => navigate("/main"); // 임시
  return (
    <>
      <div
        onClick={() => {
          setSignUpCodePopUpOpen(false);
        }}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.3)",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: "1111111",
        }}
      >
        <div
          style={{
            zIndex: "1111111111",
            width: "600px",
            height: "80%",
            backgroundColor: "white",
            transform: "translate(-50%, -50%)",
            // -webkit-transform: translate(-50%, -50%);
            // -moz-transform: translate(-50%, -50%);
            // -ms-transform: translate(-50%, -50%);
            // -o-transform: translate(-50%, -50%);
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            top: "50%",
            left: "50%",
          }}
        >
          <img
            style={{ width: 180, height: "auto", marginBottom: "50px" }}
            src={logo}
            alt="서비스 로고"
          />
          <img
            style={{ width: 180, height: "auto" }}
            src={emailIcon}
            alt="이메일 아이콘"
          />
          <span
            style={{
              margin: "20px",
            }}
          >
            인증메일을 확인해주세요 :)
          </span>
          <input
            style={{
              width: "320px",
              height: "40px",
              backgroundColor: "#F6F6F6",
              paddingLeft: "10px",
              boxSizing: "border-box",
            }}
            id="nickname"
            type="text"
            name="nickname"
            placeholder="회원가입 인증코드를 입력해주세요"
          />
          <button
            onClick={handleClickMain}
            style={{
              width: "320px",
              height: "40px",
              backgroundColor: "#0A84FF",
              color: "white",
            }}
            type="submit"
          >
            코드확인
          </button>
          <div
            style={{
              marginTop: "50px",
            }}
          >
            <span>인증메일이 오지 않았나요?</span>
            <span style={{ color: "#0A84FF" }}>인증메일 재전송</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUpCodePopUp;
