import styled from "styled-components";
import KakaoButtonImg from "assets/img/KakaoButton.png";

const KakaoShareButton = () => {
  const KakaoApiKey = process.env.REACT_APP_KAKAO_API_KEY;

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(KakaoApiKey);
  }
  const clickKakao = () => {
    window.Kakao.Share.sendCustom({
      templateId: 87042,
      templateArgs: {
        title: "제목 영역입니다.",
        description: "설명 영역입니다.",
      },
    });
  };

  return (
    <KakaoButton
      src={KakaoButtonImg}
      alt="카카오톡 공유하기 버튼"
      onClick={clickKakao}
    />
  );
};

export default KakaoShareButton;

const KakaoButton = styled.img`
  width: 48px;
  height: 48px;
  position: center;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
`;
