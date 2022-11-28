import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./Pages/LoginPage"));
const Main = lazy(() => import("./Pages/MainPage"));
const SignUp = lazy(() => import("./Pages/SignUpPage"));
const Community = lazy(() => import("./Pages/Community"));

const ROUTE = {
  MAIN: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  COMMUNITY: "/community",
};

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE.MAIN} element={<Main />} />
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route path={ROUTE.SIGNUP} element={<SignUp />} />
          <Route path={ROUTE.COMMUNITY} element={<Community />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
