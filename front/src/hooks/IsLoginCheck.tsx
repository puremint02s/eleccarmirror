import Storage from "apis/SessionStorage";

function isLogin() {
  Storage.getTokenItem();
}

export default isLogin;
