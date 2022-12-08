import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "style/global-style";

const Login = lazy(() => import("./Pages/LoginPage"));
const Start = lazy(() => import("Pages/StartPage"));
const Find = lazy(() => import("./Pages/FindUserInfo/FindPage"));
const FindEmail = lazy(() => import("./Pages/FindUserInfo/FindEmailPage"));
const FindPwd = lazy(() => import("./Pages/FindUserInfo/FindPwdPage"));
const CarMbti = lazy(() => import("./Pages/CarRecommendSteps/CarMbtiPage"));
const TestContents = lazy(() => import("./components/CarMbti/TestContents"));
const Loading = lazy(() => import("./components/CarMbti/Loading"));
const MbtiResult = lazy(() => import("./components/CarMbti/MbtiResult"));
const CalcEfficency = lazy(
  () => import("./Pages/CarRecommendSteps/CalcEfficiencyPage"),
);
const FinalResultPage = lazy(
  () => import("./Pages/CarRecommendSteps/FinalResultPage"),
);
const CarRegister = lazy(() => import("./Pages/CarRegister/CarRegisterPage"));
const SignUp = lazy(() => import("./Pages/SignUpPage"));
const Community = lazy(() => import("./Pages/Community/Community"));
const CommunityUpload = lazy(() => import("./Pages/Community/CommunityUpload"));
const MyPage = lazy(() => import("./Pages/MyPage"));
const ModifyInfo = lazy(() => import("./components/MyPage/ModifyInfo"));
const MainPage = lazy(() => import("./Pages/MainPage"));

const ROUTE = {
  START: "/",
  MAIN: "/main",
  LOGIN: "/login",
  FIND: "/find",
  FINDEMAIL: "/find/email",
  FINDPWD: "/find/pwd",
  SIGNUP: "/signup",
  COMMUNITY: "/community",
  CARREGISTER: "/carregister",
  CARMBTI: "/carmbti",
  CARMBTITEST: "/test",
  LOADING: "/loading",
  CARMBTIRESULT: "/mbtiresult/:car",
  CALCEFFICENCY: "/calcefficency",
  FINALRESULT: "/finalresult",
  COMMUNITYUPLOAD: "/community/upload",
  MYPAGE: "/mypage",
  MODIFYINFO: "/mypage/modifyinfo",
};

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path={ROUTE.START} element={<Start />} />
          <Route path={ROUTE.MAIN} element={<MainPage />} />
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route path={ROUTE.FIND} element={<Find />} />
          <Route path={ROUTE.FINDEMAIL} element={<FindEmail />} />
          <Route path={ROUTE.FINDPWD} element={<FindPwd />} />
          <Route path={ROUTE.SIGNUP} element={<SignUp />} />
          <Route path={ROUTE.COMMUNITY} element={<Community />} />
          <Route path={ROUTE.CARREGISTER} element={<CarRegister />} />
          <Route path={ROUTE.CARMBTI} element={<CarMbti />} />
          <Route path={ROUTE.CARMBTITEST} element={<TestContents />} />
          <Route path={ROUTE.LOADING} element={<Loading />} />
          <Route path={ROUTE.CARMBTIRESULT} element={<MbtiResult />} />
          <Route path={ROUTE.CALCEFFICENCY} element={<CalcEfficency />} />
          <Route path={ROUTE.FINALRESULT} element={<FinalResultPage />} />
          <Route path={ROUTE.COMMUNITYUPLOAD} element={<CommunityUpload />} />
          <Route path={ROUTE.MYPAGE} element={<MyPage />} />
          <Route path={ROUTE.MODIFYINFO} element={<ModifyInfo />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
