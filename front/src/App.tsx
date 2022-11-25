import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./pages/Community";
// import GlobalStyle from "@/styles/global-style";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
      {/* <header>
        <a href="/">My Elec Car</a>
      </header> */}
    </div>
  );
}

export default App;
