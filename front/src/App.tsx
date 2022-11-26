import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./Pages/LoginPage"));
const Find = lazy(() => import("./Pages/FindPage"));
const FindEmail = lazy(() => import("./Pages/FindEmailPage"));
const FindPwd = lazy(() => import("./Pages/FindPwdPage"));
// const MainPage = lazy(() => import("./components/Pages/MainPage"));
import Main from "./Pages/MainPage";
import SignUp from "./Pages/SignUpPage";
import Community from "./Pages/Community";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find" element={<Find />} />
          <Route path="/find/email" element={<FindEmail />} />
          <Route path="/find/pwd" element={<FindPwd />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
