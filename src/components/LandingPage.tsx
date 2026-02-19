import React from "react";
import { useSteppedAnimation } from "../hooks/useSteppedAnimation";
import "./LandingPage.css";

const caseStudies = [
  {
    title: "Auto",
    description: "Collaborative workflow builder for blockchain automations",
    role: "UX, UI, Front End",
    year: "2025",
  },
  {
    title: "Radicle Desktop",
    description: "Collaborative workflow builder for blockchain automations",
    role: "UX, UI, Front End",
    year: "2025",
  },
  {
    title: "Radicle Design System",
    description: "Collaborative workflow builder for blockchain automations",
    role: "UX, UI, Front End",
    year: "2025",
  },
];

const LandingPage: React.FC = () => {
  const { step, isComplete } = useSteppedAnimation({
    totalSteps: 6,
    stepDelays: { 5: 500 },
  });

  const stepClasses = Array.from(
    { length: step + 1 },
    (_, i) => `step-${i}`,
  ).join(" ");

  return (
    <>
      <div className={`landing ${stepClasses}`} data-step={step}>
        <div className="landing__main">
          <div className="landing__body">
            {/* Left column — identity */}
            <div className="landing__left-col">
              <div className="landing__identity">
                <div className="landing__identity-text">
                  <span className="landing__name">Daniel Kalman</span>
                  <span className="landing__role">Design Engineer</span>
                </div>
              </div>
            </div>

            {/* Right column — grows in at step 2 */}
            <div className="landing__right-col">
              {/* Upper row — 192px when step 3+ */}
              <div className="landing__upper-row">
                <div className="landing__location">
                  <div className="landing__location-text">
                    <span className="landing__location-city">Berlin</span>
                    <span className="landing__location-country">Germany</span>
                  </div>
                </div>
                <div className="landing__nav">
                  <div className="landing__nav-row">
                    <span className="landing__nav-left">Work</span>
                    <span className="landing__nav-right">About</span>
                  </div>
                  <div className="landing__nav-row landing__nav-row--bottom">
                    <span className="landing__nav-left">Services</span>
                    <span className="landing__nav-right">Blog</span>
                  </div>
                </div>
              </div>

              {/* Middle row — hero, takes remaining space */}
              <div className="landing__middle-row">
                <h1 className="landing__headline">
                  building Products that scratch an itch.
                </h1>
              </div>

              {/* Bottom row — 192px, appears at step 4 */}
              <div className="landing__bottom-row">
                <div className="landing__bottom-left" />
                <div className="landing__bottom-right">
                  <div className="landing__bio-text">
                    <p className="landing__bio">
                      I design and build digital products. From understanding
                      user needs to orchestrating implementation.
                    </p>
                    <span className="landing__since">Since 2012</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer — appears at step 5 */}
        <div className="landing__footer">
          <div className="landing__footer-inner">
            <h2 className="landing__footer-title">Selected Work</h2>
          </div>
        </div>
      </div>

      {/* Case studies */}
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
              <div className="case-study">
                <div className="case-study__image" />
                <div className="case-study__info">
                  <div className="case-study__info-top" />
                  <div className="case-study__info-bottom">
                    <div className="case-study__meta">
                      <span className="case-study__title">{study.title}</span>
                      <span className="case-study__description">
                        {study.description}
                      </span>
                    </div>
                    <div className="case-study__tags">
                      <span className="case-study__role">{study.role}</span>
                      <span className="case-study__year">{study.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
