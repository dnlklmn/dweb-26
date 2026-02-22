import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lightbox from "./Lightbox";
import "./CaseStudyPage.css";

export interface CaseStudyMeta {
  title: string;
  subtitle: string;
  tags: string;
  year: string;
  demoLink?: string;
  demoLabel?: string;
}

export type ImgHelper = (src: string, alt: string, className?: string) => React.ReactElement;

interface CaseStudyLayoutProps {
  meta: CaseStudyMeta;
  children: (img: ImgHelper) => React.ReactNode;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ meta, children }) => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [showStickyTitles, setShowStickyTitles] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyTitles(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-48px 0px 0px 0px" },
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const img: ImgHelper = (src, alt, className) => (
    <img
      src={src}
      alt={alt}
      className={className ?? "w-full h-full object-cover block"}
      style={{ cursor: "zoom-in" }}
      onClick={() => setLightbox({ src, alt })}
    />
  );

  return (
    <>
      <div className="cs-page">

        {/* Sticky back row */}
        <div className="cs-back-row">
          <Link
            to="/"
            className="cs-back-row__cell cs-back-row__cell--link"
            onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
          >
            <span className="cs-back-row__label" data-text="Daniel Kalman">Daniel Kalman</span>
          </Link>
          <div className={`cs-back-row__cell cs-back-row__cell--aux${showStickyTitles ? " cs-back-row__cell--aux-active" : ""}`}>
            {showStickyTitles && (
              <Link
                to="/#selected-work"
                className="cs-back-row__aux-action"
                onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
              >
                <span className="cs-back-row__aux-label">Work</span>
              </Link>
            )}
          </div>
          <div className={`cs-back-row__cell cs-back-row__cell--aux${showStickyTitles ? " cs-back-row__cell--aux-active" : ""}`}>
            {showStickyTitles && (
              <button
                type="button"
                className="cs-back-row__aux-action"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="cs-back-row__aux-label">{meta.title}</span>
              </button>
            )}
          </div>
          <div className="cs-back-row__cell cs-back-row__cell--aux" />
        </div>

        {/* Header */}
        <div className="cs-header" ref={headerRef}>
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
          <a
            href={meta.demoLink}
            target="_blank"
            rel="noreferrer"
            className="cs-header__cell cs-header__cell--demo"
          >
            <span className="cs-header__link">{meta.demoLabel ?? "Demo →"}</span>
          </a>
        </div>

        <div className="cs-content cs-content--visible">
          {children(img)}
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
};

export default CaseStudyLayout;
