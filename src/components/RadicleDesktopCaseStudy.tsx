import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTransition } from "../context/TransitionContext";
import Lightbox from "./Lightbox";
import "./CaseStudyPage.css";
import "./CaseStudyTransition.css";
import patchPreview from "../assets/radicle-desktop/patch-preview.png";
import patchReview from "../assets/radicle-desktop/patch-review.png";
import wireframes from "../assets/radicle-desktop/wireframes.png";
import wireframes2 from "../assets/radicle-desktop/wireframes-2.png";
import empathyMap from "../assets/radicle-desktop/empathy-map.png";
import peerSelector from "../assets/radicle-desktop/peer-selector.png";
import cliAndApp from "../assets/radicle-desktop/cli-and-app.png";
import simplerBlocks from "../assets/auto/simpler-blocks.png";
import radicleDesignSystemHeaderImage from "../assets/radicle-design-system/header.jpeg";

const images = {
  patchPreview: patchPreview,
  patchReview: patchReview,
  wireframes: wireframes,
  wireframes2: wireframes2,
  empathyMap: empathyMap,
  peerSelector: peerSelector,
  cliAndApp: cliAndApp,
  simplerBlocks: simplerBlocks,
  radicleDesignSystemHeaderImage: radicleDesignSystemHeaderImage,
};

const RadicleDesktopCaseStudy: React.FC = () => {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showStickyTitles, setShowStickyTitles] = useState(false);
  const { transitionData, clearTransition } = useTransition();
  const overlayRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!transitionData) {
      // No transition data - show immediately
      setIsAnimating(false);
      setShowContent(true);
      return;
    }

    // Set CSS custom properties for animation start positions
    const overlay = overlayRef.current;
    if (overlay) {
      const { infoTop, meta, tags } = transitionData;
      overlay.style.setProperty("--start-top", `${infoTop.top}px`);
      overlay.style.setProperty("--start-left", `${infoTop.left}px`);
      overlay.style.setProperty("--start-width", `${infoTop.width}px`);
      overlay.style.setProperty("--start-height", `${infoTop.height}px`);
      overlay.style.setProperty("--meta-top", `${meta.top}px`);
      overlay.style.setProperty("--meta-left", `${meta.left}px`);
      overlay.style.setProperty("--meta-width", `${meta.width}px`);
      overlay.style.setProperty("--meta-height", `${meta.height}px`);
      overlay.style.setProperty("--tags-top", `${tags.top}px`);
      overlay.style.setProperty("--tags-left", `${tags.left}px`);
      overlay.style.setProperty("--tags-width", `${tags.width}px`);
      overlay.style.setProperty("--tags-height", `${tags.height}px`);
    }

    // Start animation after a frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimating(false);
      });
    });

    // Show content after header animation completes
    const timer = setTimeout(() => {
      setShowContent(true);
      clearTransition();
    }, 600);

    return () => clearTimeout(timer);
  }, [transitionData, clearTransition]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyTitles(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-48px 0px 0px 0px",
      },
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const img = (src: string, alt: string, className?: string) => (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ cursor: "zoom-in" }}
      onClick={() => setLightbox({ src, alt })}
    />
  );

  return (
    <div className="cs-page">
      <div className="cs-back-row">
        <Link
          to="/"
          className="cs-back-row__cell cs-back-row__cell--link"
          onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
        >
          <span className="cs-back-row__label" data-text="Daniel Kalman">
            Daniel Kalman
          </span>
        </Link>
        <div
          className={`cs-back-row__cell cs-back-row__cell--aux${
            showStickyTitles ? " cs-back-row__cell--aux-active" : ""
          }`}
        >
          {showStickyTitles ? (
            <Link
              to="/#selected-work"
              className="cs-back-row__aux-action"
              onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
            >
              <span className="cs-back-row__aux-label">Work</span>
            </Link>
          ) : null}
        </div>
        <div
          className={`cs-back-row__cell cs-back-row__cell--aux${
            showStickyTitles ? " cs-back-row__cell--aux-active" : ""
          }`}
        >
          {showStickyTitles ? (
            <button
              type="button"
              className="cs-back-row__aux-action"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="cs-back-row__aux-label">Radicle Desktop</span>
            </button>
          ) : null}
        </div>
        <div className="cs-back-row__cell cs-back-row__cell--aux" />
      </div>

      {/* Header — 4 cells in a row */}
      <div className="cs-header" ref={headerRef}>
        <div className="cs-header__cell">
          <Link to="/" className="cs-header__title">
            Radicle Desktop
          </Link>
          <span className="cs-header__subtitle">Your Code on Your Machine</span>
        </div>
        <div className="cs-header__cell cs-header__cell--tags">
          <span className="cs-header__tags-text">UX, UI, Front End</span>
          <span className="cs-header__year">2024</span>
        </div>
        <div className="cs-header__cell cs-header__cell--spacer" />
        <a
          href="https://app.radicle.xyz/nodes/rosa.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury/"
          target="_blank"
          rel="noreferrer"
          className="cs-header__cell cs-header__cell--demo"
        >
          <span className="cs-header__link">Get the app →</span>
        </a>
      </div>

      {/* Spacer */}
      <div className="cs-spacer cs-spacer--border-bottom cs-spacer--border-top" />

      {/* Intro — 3 columns */}
      <div className="cs-intro">
        <div className="cs-intro__left" />
        <div className="cs-intro__description">
          <p className="cs-intro__text">
            The Radicle desktop app lets you manage issues and patches, review
            code, and stay on top of notifications. Write and review offline,
            then sync with your peers when you're back online.
          </p>
        </div>
        <div className="cs-intro__meta">
          <div className="cs-intro__meta-group">
            <span className="cs-intro__meta-label">Company</span>
            <span className="cs-intro__meta-value">Radicle</span>
          </div>
          <div className="cs-intro__meta-group">
            <span className="cs-intro__meta-label">Role</span>
            <span className="cs-intro__meta-value">
              Design, Prototype, User research
            </span>
          </div>
          <div className="cs-intro__meta-group">
            <span className="cs-intro__meta-label">Tech</span>
            <span className="cs-intro__meta-value">Figma, Svelte</span>
          </div>
        </div>
      </div>

      <div className="cs-spacer cs-spacer--border-bottom cs-spacer--border-top" />

      {/* Hero image — 3 columns */}
      <div className="cs-hero">
        <div className="cs-hero__center">
          <div className="cs-hero__image-wrapper">
            {img(images.patchPreview, "Auto workflow builder interface")}
          </div>
        </div>{" "}
        <div className="cs-hero__center">
          <div className="cs-hero__image-wrapper">
            {img(images.patchReview, "Auto workflow builder interface")}
          </div>
        </div>
      </div>

      <div className="cs-spacer cs-spacer--border-top" />

      {/* Challenge and Goals */}
      <div className="cs-text-section">
        <div className="cs-text-section__left" />
        <div className="cs-text-section__right">
          <div className="cs-text-block">
            <h3>Challenge and Goals</h3>
            <p>
              The Radicle desktop app is a long-term project spanning multiple
              features: patches, code review, notifications, and more. The goal
              is to make peer-to-peer code collaboration feel as familiar as
              centralized tools, without hiding what makes Radicle different.
            </p>
            <p>
              The core challenge is that Radicle's underlying model
              (peer-to-peer, local-first, tracable) doesn't map neatly onto the
              mental models users bring from GitHub. Every design decision needs
              to bridge that gap honestly.
            </p>
          </div>
          <div className="cs-text-block cs-spacer--border-top">
            <h3>Process and Responsibilities</h3>
            <p>
              For each feature I followed the same loop: understand the user
              need and the relevant protocol behaviour, formulate a hypothesis,
              then sketch wireframes, try out simple prototypes, and at last
              provide detailed designs to implement.
            </p>
            <p>
              Ideas were validated with both users and the engineering team
              before moving to high-fidelity mockups and handoff.
            </p>
          </div>
        </div>
      </div>

      <div className="cs-section-heading">
        <h2>Foundations</h2>
      </div>

      <div className="cs-spacer cs-spacer--border-bottom" />

      <div className="cs-content-row">
        <div className="cs-content-row__text">
          <p>
            I started by learning about the Radicle protocol, different code
            review workflows, and what a desktop app needs to surface in a
            peer-to-peer setup.
          </p>
          <p>
            I explored several structural options, weighing ease of navigation
            against staying true to how Radicle actually works, avoiding
            abstractions that would confuse users moving between the app and the
            CLI.
          </p>
          <p>
            Alongside this, I talked to users and noted patterns in how they
            think about their current tools, and about switching to Radicle
            which helped understand their mindset better.
          </p>
        </div>
        <div className="cs-content-row__images cs-content-row__images--1 cs-content-row__images--wide cs-spacer--border-right">
          {img(images.wireframes2, "Simpler block design")}
        </div>
        <div className="cs-content-row__images cs-content-row__images--1">
          {img(images.empathyMap, "Simpler block design")}
        </div>
      </div>

      <div className="cs-spacer cs-spacer--border-bottom" />

      <div className="cs-content-row">
        <div className="cs-content-row__images cs-content-row__images--1 cs-spacer--border-right"></div>
        <div className="cs-content-row__text ">
          <p>
            Patches in Radicle are more complex than typical pull requests: they
            have revisions, and each peer in the network may be at a different
            revision, or may not have fetched the latest updates at all.
          </p>
          <p>
            Designing the patch page meant making this visible without
            overwhelming users. Whose version am I looking at, what's changed
            since I last fetched, and from whom?
          </p>
        </div>
        <div className="cs-content-row__images cs-content-row__images--1 cs-content-row__images--wide cs-spacer--border-right">
          {img(images.wireframes, "Simpler block design")}
        </div>
      </div>

      <div className="cs-section-heading">
        <h2>Local First</h2>
      </div>
      <div className="cs-spacer cs-spacer--border-bottom" />

      {/* MVP content row: text + 2 images */}
      <div className="cs-content-row">
        <div className="cs-content-row__images cs-content-row__images--1 cs-content-row__images--wide cs-spacer--border-right">
          {img(images.peerSelector, "Simpler block design")}
        </div>
        <div className="cs-content-row__text">
          <p>
            Because the desktop app only sees what your node sees it is crucial
            that we rely on seed nodes accessible through the web app for peer
            discovery.
          </p>
          <p>
            In local-first and peer-to-peer architectures, you're never entirely
            sure if you're viewing the latest version. Users won't receive
            updates from unknown peers, even if they've both contributed to the
            same repository.
          </p>
        </div>
        <div className="cs-content-row__images cs-content-row__images--1 cs-spacer--border-right"></div>
      </div>

      <div className="cs-section-heading">
        <h2>True to Code</h2>
      </div>

      <div className="cs-spacer cs-spacer--border-bottom" />

      {/* Collab intro with Try it out link */}
      <div className="cs-collab-intro">
        <div className="cs-collab-intro__spacer cs-spacer--border-right" />
        <div className="cs-collab-intro__content">
          <div className="cs-collab-intro__text">
            <p>
              The app mirrors the underlying protocol and CLI tools closely.
              This makes it easier for users to move between the desktop app and
              command line without switching mental models.
            </p>
            <p>
              Everything in Radicle is immutable and signed, so the UI reflects
              that: you can always see what's changed, by whom, and trace it
              back to its source.
            </p>
          </div>
        </div>
        <a
          href="https://auto-workflow-builder.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="cs-collab-intro__cta cs-spacer--border-left"
          aria-label="Try Auto workflow builder in a new tab"
        >
          <span className="cs-collab-intro__link">Try it out →</span>
        </a>
      </div>

      {/* Collab images row */}
      <div className="cs-content-row">
        <div className="cs-content-row__text"></div>
        <div className="cs-content-row__images cs-content-row__images--1 cs-content-row__images--wide cs-spacer--border-right">
          {img(images.cliAndApp, "Real-time collaboration")}
        </div>
        <div className="cs-collab-intro__spacer"></div>
      </div>

      <div className="cs-spacer cs-spacer--border-bottom" />
      <div className="cs-section-heading">
        <h2>Other work</h2>
      </div>

      <div className="cs-other-section">
        <div className="cs-other-nav">
          <Link
            to="/radicle-design-system"
            className="cs-other-nav__cell cs-other-nav__cell--prev"
          >
            <span className="cs-other-nav__label">← Prev</span>
          </Link>
          <div className="cs-other-nav__cell cs-other-nav__cell--mid" />
          <div className="cs-other-nav__cell cs-other-nav__cell--mid" />
          <Link
            to="/radicle-desktop"
            className="cs-other-nav__cell cs-other-nav__cell--next"
          >
            <span className="cs-other-nav__label">Next →</span>
          </Link>
        </div>

        <div className="cs-other-cards">
          <Link
            to="/radicle-design-system"
            className="cs-other-card cs-other-card--prev"
          >
            <div className="cs-other-card__meta">
              <div className="cs-other-card__text">
                <span className="cs-other-card__title">
                  Radicle Design System
                </span>
                <span className="cs-other-card__description">
                  Collaborative workflow builder for blockchain automations
                </span>
              </div>
              <div className="cs-other-card__image">
                <img
                  src={images.radicleDesignSystemHeaderImage}
                  alt="Radicle Design System preview"
                />
              </div>
              <div className="cs-other-card__tags">
                <span className="cs-other-card__role">UX, UI, Front End</span>
                <span className="cs-other-card__year">2024</span>
              </div>
            </div>
          </Link>

          <div className="cs-other-cards__spacer" />
          <div className="cs-other-cards__spacer" />

          <Link to="/auto" className="cs-other-card cs-other-card--next">
            <div className="cs-other-card__meta">
              <div className="cs-other-card__text">
                <span className="cs-other-card__title">Auto</span>
                <span className="cs-other-card__description">
                  Collaborative workflow builder for blockchain automations
                </span>
              </div>
              <div className="cs-other-card__image">
                <img src={images.simplerBlocks} alt="Radicle Desktop preview" />
              </div>
              <div className="cs-other-card__tags">
                <span className="cs-other-card__role">UX, UI, Front End</span>
                <span className="cs-other-card__year">2025</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="cs-spacer cs-spacer--border-bottom" />

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};

export default RadicleDesktopCaseStudy;
