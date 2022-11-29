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

function SocialShare() {
  const currentUrl = window.location.href;

  return (
    <ShareButtonWrapper>
      <ShareButtonTitle>친구에게 공유하기</ShareButtonTitle>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={48} round={true} borderRadius={24} />
      </FacebookShareButton>
      <ShareButton>K</ShareButton>
      <TwitterShareButton url={currentUrl}>
        <TwitterIcon size={48} round={true} borderRadius={24} />
      </TwitterShareButton>
      <ShareButton
        onClick={() =>
          copyClipboard(
            currentUrl,
            () => console.log("link copy success"),
            () => console.log("link copy fail"),
          )
        }
      >
        <i className="ri-link" />
      </ShareButton>
    </ShareButtonWrapper>
  );
}

export default SocialShare;
