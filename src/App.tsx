import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CaseStudyPage from "./components/CaseStudyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:slug" element={<CaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
