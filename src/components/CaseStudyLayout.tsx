import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTransition } from "../context/TransitionContext";
import "./CaseStudyPage.css";
import "./CaseStudyTransition.css";

export interface CaseStudyMeta {
  title: string;
  subtitle: string;
  tags: string;
  year: string;
  demoLink?: string;
}

interface CaseStudyLayoutProps {
  meta: CaseStudyMeta;
  children: React.ReactNode;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ meta, children }) => {
  const [animationPhase, setAnimationPhase] = useState<
    "initial" | "expanding" | "complete"
  >("initial");
  const { transitionData, clearTransition } = useTransition();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!transitionData) {
      // No transition data (direct navigation) - show immediately
      setAnimationPhase("complete");
      return;
    }

    // Set CSS custom properties for animation start positions
    const overlay = overlayRef.current;
    if (overlay) {
      const { infoTop, meta, tags } = transitionData;
      // Info-top box (expands to full screen)
      overlay.style.setProperty("--start-top", `${infoTop.top}px`);
      overlay.style.setProperty("--start-left", `${infoTop.left}px`);
      overlay.style.setProperty("--start-width", `${infoTop.width}px`);
      overlay.style.setProperty("--start-height", `${infoTop.height}px`);
      // Meta block (title + description)
      overlay.style.setProperty("--meta-top", `${meta.top}px`);
      overlay.style.setProperty("--meta-left", `${meta.left}px`);
      overlay.style.setProperty("--meta-width", `${meta.width}px`);
      overlay.style.setProperty("--meta-height", `${meta.height}px`);
      // Tags block (role + year)
      overlay.style.setProperty("--tags-top", `${tags.top}px`);
      overlay.style.setProperty("--tags-left", `${tags.left}px`);
      overlay.style.setProperty("--tags-width", `${tags.width}px`);
      overlay.style.setProperty("--tags-height", `${tags.height}px`);
    }

    // Start expansion animation after a frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimationPhase("expanding");
      });
    });

    // Complete animation and show content
    const timer = setTimeout(() => {
      setAnimationPhase("complete");
      clearTransition();
    }, 700);

    return () => clearTimeout(timer);
  }, [transitionData, clearTransition]);

  const isTransitioning = transitionData && animationPhase !== "complete";

  return (
    <>
      {/* Transition overlay - only shown during animation */}
      {isTransitioning && (
        <div
          ref={overlayRef}
          className={`cs-transition ${animationPhase === "expanding" ? "cs-transition--expanded" : ""}`}
        >
          {/* Expanding background (from info-top) */}
          <div className="cs-transition__bg" />

          {/* Animated meta block */}
          <div className="cs-transition__meta">
            <span className="cs-transition__title">{meta.title}</span>
            <span className="cs-transition__subtitle">{meta.subtitle}</span>
          </div>

          {/* Animated tags block */}
          <div className="cs-transition__tags">
            <span className="cs-transition__tags-text">{meta.tags}</span>
            <span className="cs-transition__year">{meta.year}</span>
          </div>
        </div>
      )}

      {/* Actual page content */}
      <div
        className={`cs-page ${animationPhase !== "complete" ? "cs-page--hidden" : "cs-page--visible"}`}
      >
        {/* Header — 4 cells in a row */}
        <div className="cs-header">
          <div className="cs-header__cell">
            <Link
              to="/"
              className="cs-header__title"
              onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
            >
              {meta.title}
            </Link>
            <span className="cs-header__subtitle">{meta.subtitle}</span>
          </div>
          <div className="cs-header__cell cs-header__cell--tags">
            <span className="cs-header__tags-text">{meta.tags}</span>
            <span className="cs-header__year">{meta.year}</span>
          </div>
          <div className="cs-header__cell cs-header__cell--spacer" />
          <div className="cs-header__cell cs-header__cell--demo">
            {meta.demoLink && (
              <a href={meta.demoLink} className="cs-header__link">
                Demo →
              </a>
            )}
          </div>
        </div>

        {/* Content with staggered reveal */}
        <div
          className={`cs-content ${animationPhase === "complete" ? "cs-content--visible" : ""}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default CaseStudyLayout;
