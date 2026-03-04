import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext";
import LandingPage from "./components/LandingPage";
import CaseStudyPage from "./components/CaseStudyPage";
import About from "./components/About";
import NotesPage from "./components/NotesPage";
import NotesPostPage from "./components/NotesPostPage";
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
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/notes/:slug" element={<NotesPostPage />} />
          <Route path="/:slug" element={<CaseStudyPage />} />
        </Routes>
        <BorderToggle />
      </BrowserRouter>
    </TransitionProvider>
  );
}

export default App;
