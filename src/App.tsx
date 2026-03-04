import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext";
import LandingPage from "./components/LandingPage";
import CaseStudyPage from "./components/CaseStudyPage";
import About from "./components/About";
import BlogPage from "./components/BlogPage";
import BlogPostPage from "./components/BlogPostPage";
import ContactPage from "./components/ContactPage";
import AskPage from "./components/AskPage";
import BorderToggle from "./components/BorderToggle";

function App() {
  return (
    <TransitionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/:slug" element={<CaseStudyPage />} />
        </Routes>
        <BorderToggle />
      </BrowserRouter>
    </TransitionProvider>
  );
}

export default App;
