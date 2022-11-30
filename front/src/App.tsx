import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./Pages/LoginPage"));
const Start = lazy(() => import("Pages/StartPage"));
const SignUp = lazy(() => import("./Pages/SignUpPage"));
const Community = lazy(() => import("./Pages/Community"));

import Test from "Pages/Test";

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
          <Route path={ROUTE.SIGNUP} element={<SignUp />} />
          <Route path={ROUTE.COMMUNITY} element={<Community />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
