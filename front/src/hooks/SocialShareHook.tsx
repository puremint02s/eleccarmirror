import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { copyClipboard } from "hooks/CopyClipboard";
import {
  ShareButtonWrapper,
  ShareButtonTitle,
  ShareButton,
} from "style/ShareButtonStyle";
import "remixicon/fonts/remixicon.css";
import KakaoShareButton from "./KakaoShareButton";

function SocialShare() {
  const currentUrl = window.location.href;

  return (
    <ShareButtonWrapper>
      <ShareButtonTitle>결과 공유하기</ShareButtonTitle>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={48} round={true} borderRadius={24} />
      </FacebookShareButton>
      <KakaoShareButton />
      <TwitterShareButton url={currentUrl}>
        <TwitterIcon size={48} round={true} borderRadius={24} />
      </TwitterShareButton>
      <ShareButton
        onClick={() =>
          copyClipboard(
            currentUrl,
            () => window.alert("링크가 복사되었습니다."),
            () => window.alert("링크 복사에 실패하였습니다."),
          )
        }
      >
        <i className="ri-link" />
      </ShareButton>
    </ShareButtonWrapper>
  );
}

export default SocialShare;
