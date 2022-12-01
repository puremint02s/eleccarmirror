import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./Pages/LoginPage"));
const Start = lazy(() => import("Pages/StartPage"));
const Find = lazy(() => import("./Pages/FindPage"));
const FindEmail = lazy(() => import("./Pages/FindEmailPage"));
const FindPwd = lazy(() => import("./Pages/FindPwdPage"));
const CarMbti = lazy(() => import("./Pages/CarMbtiPage"));
// const TestContents = lazy(() => import("./components/CarMbti/TestContents"));
const Loading = lazy(() => import("./components/CarMbti/Loading"));
const MbtiResult = lazy(() => import("./components/CarMbti/MbtiResult"));
const CalcEfficency = lazy(() => import("./Pages/CalcEfficiencyPage"));
const FinalResultPage = lazy(() => import("./Pages/FinalResultPage"));
const CarRegister = lazy(() => import("./Pages/CarRegisterPage"));
const SignUp = lazy(() => import("./Pages/SignUpPage"));
const Community = lazy(() => import("./Pages/Community"));

const ROUTE = {
  START: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  COMMUNITY: "/community",
};

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE.START} element={<Start />} />
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route path="/find" element={<Find />} />
          <Route path="/find/email" element={<FindEmail />} />
          <Route path="/find/pwd" element={<FindPwd />} />
          <Route path={ROUTE.SIGNUP} element={<SignUp />} />
          <Route path={ROUTE.COMMUNITY} element={<Community />} />
          <Route path="/carmbti" element={<CarMbti />} />
          <Route path="/carregister" element={<CarRegister />} />
          {/* <Route path="/test" element={<TestContents />} /> */}
          <Route path="/loading" element={<Loading />} />
          <Route path="/mbtiresult/:car" element={<MbtiResult />} />
          <Route path="/calcefficency" element={<CalcEfficency />} />
          <Route path="/finalresult" element={<FinalResultPage />} />
          <Route path="/community/upload" element={<CommunityUpload />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
