import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext";
import LandingPage from "./components/LandingPage";
import CaseStudyPage from "./components/CaseStudyPage";

function App() {
  return (
    <TransitionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:slug" element={<CaseStudyPage />} />
        </Routes>
      </BrowserRouter>
    </TransitionProvider>
  );
}

export default App;
