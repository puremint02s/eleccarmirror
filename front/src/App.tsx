import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./components/Pages/LoginPage"));
// const MainPage = lazy(() => import("./components/Pages/MainPage"));
import Main from "./components/Pages/MainPage";
import SignUp from "./components/Pages/SignUpPage";
import Community from "./components/Pages/Community";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
