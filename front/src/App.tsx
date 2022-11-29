import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./Pages/LoginPage"));
// const MainPage = lazy(() => import("./components/Pages/MainPage"));
import Main from "./Pages/MainPage";
import SignUp from "./Pages/SignUpPage";
import Community from "./Pages/Community";
import CommunityUpload from "Pages/CommunityUpload";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/upload" element={<CommunityUpload />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
