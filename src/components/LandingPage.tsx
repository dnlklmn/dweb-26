import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSteppedAnimation } from "../hooks/useSteppedAnimation";
import CaseStudyCard, { CaseStudy } from "./CaseStudyCard";
import "./LandingPage.css";
import autoHeaderImage from "../assets/auto/header-2.jpeg";
import radicleDesktopHeaderImage from "../assets/radicle-desktop/header-2.png";
import radicleDesignSystemHeaderImage from "../assets/radicle-design-system/header.jpeg";

const caseStudies: CaseStudy[] = [
  {
    title: "Auto",
    slug: "auto",
    description: "Collaborative workflow builder for blockchain automations",
    role: "UX, UI, Front End",
    year: "2025",
    image: autoHeaderImage,
  },
  {
    title: "Radicle Desktop",
    slug: "radicle-desktop",
    description: "Your code, your machine",
    role: "UX, UI, Front End",
    year: "2025",
    image: radicleDesktopHeaderImage,
  },
  {
    title: "Radicle Design System",
    slug: "radicle-design-system",
    description: "Consistency by design",
    role: "UX, UI, Front End",
    year: "2025",
    image: radicleDesignSystemHeaderImage,
  },
];

const SKIP_ANIM_KEY = "landing-skip-anim";

const LandingPage: React.FC = () => {
  const location = useLocation();
  const skipAnim = sessionStorage.getItem(SKIP_ANIM_KEY) === "1";

  const { step, isComplete } = useSteppedAnimation({
    totalSteps: 6,
    stepDelays: { 2: 200, 5: 500 },
    skipToEnd: skipAnim,
  });

  // Clear the flag after reading it so a reload will animate again
  React.useEffect(() => {
    sessionStorage.removeItem(SKIP_ANIM_KEY);
  }, []);

  React.useEffect(() => {
    if (location.hash !== "#selected-work" || !isComplete) return;
    const target = document.getElementById("selected-work");
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 12;
    window.scrollTo({ top, behavior: "smooth" });
  }, [location.hash, isComplete]);

  const stepClasses = Array.from(
    { length: step + 1 },
    (_, i) => `step-${i}`,
  ).join(" ");

  return (
    <div className={isComplete ? "anim-complete" : ""}>
      <div className={`landing ${stepClasses}`}>
        <div className="landing__main">
          {/* Left column — identity, width animated by step classes */}
          <div className="landing__left-col flex items-start p-2">
            <div className="landing__identity-text flex flex-col gap-2">
              <span className="text-sm font-bold leading-[1.21] whitespace-nowrap text-(--color-accent)">
                Daniel Kalman
              </span>
              <span className="text-sm font-normal leading-[1.21] whitespace-nowrap">
                Design Engineer
              </span>
            </div>
            <div className="h-4 w-full flex flex-col justify-center">
              <div className="h-px bg-(--color-border) post-anim-width" />
            </div>
          </div>

          {/* Right column — flex animated by step classes */}
          <div className="landing__right-col">
            {/* Upper row — flex + border animated by step classes */}
            <div className="landing__upper-row">
              <div className="flex items-start p-2 flex-col gap-2 flex-1 min-w-0">
                <span className="text-sm font-bold leading-[1.21]">Berlin</span>
                <span className="text-sm font-normal leading-[1.21]">
                  Germany
                </span>
              </div>
              {/* Nav — flex + opacity animated by step classes */}
              <div className="landing__nav justify-between items-center flex gap-1">
                <div className="flex justify-between items-end whitespace-nowrap w-full h-full gap-1">
                  <Link
                    className="landing__nav-link w-full h-full text-sm font-medium leading-[1.21]"
                    to="/#selected-work"
                    style={{ color: "inherit", fontSize: 14 }}
                  >
                    <span>Work</span>
                  </Link>
                  <div className="h-2 flex flex-col justify-center">
                    <div className="w-px bg-(--color-border) post-anim-height " />
                  </div>
                  <Link
                    className="landing__nav-link w-full h-full text-sm font-medium leading-[1.21] flex justify-end"
                    to="/about"
                    style={{ color: "inherit", fontSize: 14 }}
                  >
                    <span>About</span>
                  </Link>
                </div>
                <div className="w-8 flex flex-col justify-center flex-1 ">
                  <div className="h-px bg-(--color-border) post-anim-width" />
                </div>
                {/* Bottom nav row — translateY animated by step classes */}
                <div className="landing__nav-row--bottom flex justify-between whitespace-nowrap w-full h-full gap-1">
                  <div className="landing__nav-link w-full h-full text-sm font-medium leading-[1.21] flex items-end">
                    <span>Services</span>
                  </div>
                  <div className="h-2 flex flex-col justify-center">
                    <div className="w-px bg-(--color-border) post-anim-height " />
                  </div>
                  <div className="landing__nav-link w-full h-full text-sm font-medium leading-[1.21] flex justify-end items-end">
                    <span>Blog</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle row — flex animated by step classes */}
            <div className="landing__middle-row">
              <h1 className="landing__headline">
                building Products that scratch an{" "}
                <span className="text-var(--color-accent)">itch.</span>
              </h1>
            </div>

            {/* Bottom row — height animated by step classes */}
            <div className="landing__bottom-row">
              {/* Bottom-left spacer — flex animated by step classes */}
              <div className="landing__bottom-left" />
              <div className="w-px self-stretch bg-(--color-border) post-anim" />
              <div className="flex flex-col justify-end p-2 flex-1 min-w-0">
                {/* Bio text — opacity animated by step classes */}
                <div className="landing__bio-text flex flex-col gap-2">
                  <p className="text-sm font-normal leading-[1.21] max-w-[254px]">
                    I design and build digital products. From understanding user
                    needs to orchestrating implementation.
                  </p>
                  <span className="text-sm font-normal leading-[1.21]">
                    Since 2012
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer — height animated by step classes */}
        <div id="selected-work" className="landing__footer">
          <div className="landing__footer-inner pt-12 px-2 pb-2">
            {/* Title — opacity animated by step classes */}
            <h2 className="landing__footer-title text-3xl font-bold leading-[1.21]">
              Selected Work
            </h2>
          </div>
        </div>
      </div>

      {/* Case studies — visibility animated by case-studies--visible class */}
      <div
        className={`case-studies${isComplete ? " case-studies--visible" : ""}`}
      >
        {caseStudies.map((study, i) => (
          <React.Fragment key={study.title}>
            <div
              className="case-study__reveal"
              style={{ transitionDelay: `${i * 2 * 150}ms` }}
            >
              <div className="case-study__separator" />
            </div>
            <div
              className="case-study__reveal"
              style={{ transitionDelay: `${(i * 2 + 1) * 150}ms` }}
            >
              <CaseStudyCard
                study={study}
                onNavigate={() => sessionStorage.setItem(SKIP_ANIM_KEY, "1")}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="h-12" />
    </div>
  );
};

export default LandingPage;
